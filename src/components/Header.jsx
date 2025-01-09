import React from "react";
import Logo from "./ui/Logo";
import Link from "next/link";

import {
  LinkedinIcon,
  DribbbleIcon,
  GithubIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./ui/Icons";
import TranslationButton from "./ui/TranslationButton";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav className="flex items-center w-max py-3 px-8 font-medium capitalize rounded-full border border-solid border-dark dark:border-light fixed top-6 right-1/2 translate-x-1/2 dark:bg-inherit bg-light/80 backdrop-blur-sm">
        {routes.map((route) => (
          <Link
            key={route.name}
            href={route.path === "/" ? "/" : `/${route.path}`}
            className="text-dark dark:text-light mx-2"
          >
            {route.name}
          </Link>
        ))}
        <button>
          {false ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>
      </nav>
      <div className="flex items-center">
        <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
          <LinkedinIcon className="inline-block w-6 h-6 mr-4 hover:scale-150 transition-all ease duration-200" />
        </a>
        <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
          <TwitterIcon className="inline-block w-6 h-6 mr-4" />
        </a>
        <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
          <GithubIcon className="inline-block w-6 h-6 mr-4 dark:fill-light" />
        </a>
        <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
          <DribbbleIcon className="inline-block w-6 h-6 mr-4" />
        </a>
        <TranslationButton />
      </div>
    </header>
  );
};

export default Header;
