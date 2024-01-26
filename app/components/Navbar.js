import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import logos from "../../public/logos.png";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between mx-auto max-w-[1280px] px-6 lg:px-0 relative z-30 py-5">
      
      <Link href={"/"} className={'flex flex-row'}>
        <Image src={logos} alt="logo" width={70} height={70} /> <p className={'merinda-font text-4xl flex items-center ml-4'}>ScamSensei</p>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex text-white ">
        {NAV_LINKS.map((link) => (
         <li key={link.key}>
             <Link
                 href={link.href}

                 className="regular-16 text-grey-50 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-blue-100"
             >
                 {link.label}
             </Link>
         </li>
        ))}
      </ul>
      <div className="lg:flex lg:items-center lg:justify-center hidden">
          <Link href={'/Signin'}>
                <Button label="Log in" type="button" icon="/user.svg" variant=" px-8 py-4 text-white bg-black"/>
          </Link>
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