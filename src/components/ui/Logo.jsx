import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import profile from "@/public/profile-img.png";
import Image from "next/image";


const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-16 border border-solid border-dark rounded-full overflow-hidden mr-2">
        <Image
          src={profile}
          alt="Code"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="font-bold text-xl">Code</span>
    </Link>
  );
};

export default Logo;
