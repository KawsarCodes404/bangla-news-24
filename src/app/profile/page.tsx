'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const [show, setShow] = useState(false);

    useEffect(() => {
        const error = new URLSearchParams(window.location.search).get("error");
        if (error) {
            toast.error("Could not connect that social account. Make sure you selected the same email address.");
        }
    }, []);

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    const handleLinkSocial = async (provider: "google" | "github") => {
        const { error } = await authClient.linkSocial({
            provider,
            callbackURL: "/profile",
            errorCallbackURL: "/profile",
        });

        if (error) {
            toast.error(error.message ?? "Could not connect the account. Please try again.");
        }
    }

    const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const NewUserData = Object.fromEntries(formData.entries()) as { name: string, image: string };

        await authClient.updateUser({
            ...NewUserData,
        })
    }

    const handleShowForm = () => {
        setShow(!show)
    }

    if (isPending) {
        return <p className="mt-5 text-center">Loading your profile...</p>;
    }

    if (!user) {
        return <p className="mt-5 text-center">Please <Link className="underline" href="/signin">sign in</Link> to view your profile.</p>;
    }

    return (
        <div>
            <Link href={'/profile'}>
                <div className="avatar">
                    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-red-100 text-sm font-bold text-red-800 ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                        {(user?.name?.trim().charAt(0) || "U").toUpperCase()}
                        {user?.image && <img
                            alt={user.name ?? "User profile"}
                            src={user.image}
                            className="absolute inset-0 h-full w-full object-cover"
                            onError={(event) => { event.currentTarget.style.display = "none"; }}
                        />}
                    </div>
                </div>
            </Link>

            <h2 className="max-w-40 text-sm">{user?.name}</h2>

            <p>{user?.email}</p>

            <button
                className="btn btn-error btn-sm"
                onClick={handleSignOut}
            >
                Sign out
            </button>

            <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" className="btn btn-sm" onClick={() => handleLinkSocial("google")}>
                    Connect Google
                </button>
                <button type="button" className="btn btn-sm" onClick={() => handleLinkSocial("github")}>
                    Connect GitHub
                </button>
            </div>

            <button onClick={handleShowForm} className="btn block mt-5">Edit Profile</button>

            {show && <form action="" onSubmit={handleUpdateProfile}>
                <fieldset className="fieldset rounded-box w-md">
                    <label className="label">নাম</label>
                    <input name="name" type="text" className="input w-md" placeholder="Name" />

                    <label className="label">Image</label>
                    <input name="image" type="url" className="input w-md" placeholder="Image" />

                    <button type="submit" className="btn btn-neutral mt-4 bg-red-600">Update Profile</button>
                </fieldset>

            </form>}
        </div>
    );
};

export default ProfilePage;
