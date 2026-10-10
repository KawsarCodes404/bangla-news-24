import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  });

  return (
    <header className="relative mx-auto w-full max-w-7xl px-4 pt-4 pb-3">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/logo.webp"
            height={44}
            width={44}
            className="h-11 w-11"
            alt="header logo"
          />

          <div className="leading-tight">
            <h1 className="text-xl font-bold text-red-700 md:text-2xl">Bangla News 24</h1>
            <p className="text-xs text-gray-600">{date}</p>
          </div>
        </div>

        <NavLinks />
      </div>

      <div className="mt-3 flex justify-center md:absolute md:top-4 md:right-4 md:mt-0">
        <UserInfo />
      </div>

    </header>
  );
};

export default Header;
