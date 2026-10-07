import Image from "next/image";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  });

  return (
    <header className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-3 px-4 py-4 md:grid-cols-[1fr_auto_1fr]">
      {/* Centered logo and text */}
      <div className="flex items-center justify-center gap-2 md:col-start-2">
        <Image
          src="/logo.webp"
          height={40}
          width={40}
          className="h-10 w-10"
          alt="header logo"
        />

        <div>
          <h2>Bangla News 24</h2>
          <p>{date}</p>
        </div>
      </div>

      {/* Buttons on the right */}
      <div className="flex items-center justify-center gap-3 md:col-start-3 md:justify-self-end">
        <button className="btn">সাইন ইন</button>
        <button className="btn bg-red-700 text-white">সাইন আপ</button>
      </div>


      <NavLinks />

    </header>
  );
};

export default Header;