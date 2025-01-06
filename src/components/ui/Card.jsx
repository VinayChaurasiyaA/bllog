"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import { CopyButton } from "./Cbutton";

export const Pre = ({ children, raw, ...props }) => {
  const lang = props["data-language"];
  return (
    <pre {...props} className={"block w-full p-0"}>
      <div
        className={
          "flex w-full relative -top-[0.8rem] justify-between py-2 px-4 text-sm border-b border-solid border-gray-300 dark:border-b-slate-50 code-header"
        }
        // style={{ width: "100%", boxSizing: "border-box" }}
      >
        {lang}
        <CopyButton text={raw} />
      </div>
      {children}
    </pre>
  );
};

const mdxComponents = {
  Image,
  pre: Pre,
};

const Card = ({ blog }) => {
  //   console.log(blog);
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div
      className="col-span-12  lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max
    prose-blockquote:bg-accent/20 
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-accent
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg

    prose-li:marker:text-accent

    dark:prose-invert
    dark:prose-blockquote:border-accentDark
    dark:prose-blockquote:bg-accentDark/20
    dark:prose-li:marker:text-accentDark

    first-letter:text-3xl
    sm:first-letter:text-5xl
    


    "
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default Card;
