import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between mx-auto max-w-[1280px] px-6 lg:px-0 relative z-30 py-5">
      
      <Link href={"/"}>
        <Image src={"/enter scam sensei logo"} alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-grey-50 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flex lg:items-center lg:justify-center hidden">
                <Button label="Log in" type="button" icon="/user.svg" variant=" px-8 py-4 text-white bg-black"/>
                
      </div>
      <Image
      src={"menu.svg"}
        alt="menu"
        width={32}
        height={32}
        className="inline-block lg:hidden cursor-pointer"
      />
    </nav>
  );
};

export default Navbar;