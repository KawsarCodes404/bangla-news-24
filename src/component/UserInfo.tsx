'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
    const { data: session } = authClient.useSession();

    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    // console.log(user);

    return (
        <div className="flex items-center justify-center gap-3">
            {
                user ? <div className="flex flex-col items-center gap-1">
                    <Link href={'/profile'}>
                        <div className="avatar">
                            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-red-100 text-sm font-bold text-red-800 ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                                {(user.name?.trim().charAt(0) || "U").toUpperCase()}
                                {user.image && <img
                                    alt={user.name ?? "User profile"}
                                    src={user.image}
                                    className="absolute inset-0 h-full w-full object-cover"
                                    onError={(event) => { event.currentTarget.style.display = "none"; }}
                                />}
                            </div>
                        </div>
                    </Link>

                    <h2 className="max-w-40 truncate text-sm">{user?.name}</h2>

                    <button
                        className="btn btn-error btn-sm"
                        onClick={handleSignOut}
                    >
                        Sign out
                    </button>
                </div> : < div className="mt-5 bg-white flex gap-1">
                    <Link href={'/signin'}>
                        <button className="btn">সাইন ইন</button>
                    </Link>

                    <Link href={'/signup'}>
                        <button className="btn bg-red-700 text-white">সাইন আপ</button>
                    </Link>
                </div>
            }
        </div >
    );
};

export default UserInfo;
