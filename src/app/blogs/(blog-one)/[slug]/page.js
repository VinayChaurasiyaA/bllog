// "use server";
"use client";
import React, { useContext } from "react";
import { allBlogs } from "../../../../../.contentlayer/generated";
import Card from "../../../../components/ui/Card";

import { LanguageContext } from "../../../../Provider/Provider";

const page = ({ params }) => {
  const { lng } = useContext(LanguageContext);
  console.log(lng);

  // Filter blogs based on language
  const pick = allBlogs.filter((blogs) => {
    if (lng === "hi") {
      return blogs._raw.flattenedPath.includes("/hindi/");
    }
    return !blogs._raw.flattenedPath.includes("/hindi/");
  });

  // Find the specific blog
  const blog = pick.find((blogs) => {
    let path = blogs._raw.flattenedPath
      .replace("blog-one/", "")
      .replace("/hindi", "");

    return path === params.slug;
  });

  console.log("Selected Blog:", blog);

  console.log("Translated Blog:", blog);
  // const blog = allBlogs.find(
  //   (blogs) => blogs._raw.flattenedPath.replace("blog-one/", "") === params.slug
  // );
  const { slug } = params;
  // console.log(blog);
  console.log(slug);

  // i want an array which has [blogs / blog-one / slug]
  const location = ["Home", "blogs", slug];
  const handleClick = (index) => {
    console.log(index);
    // if index is 0 then go to home
    // if index is 1 then go to blogs
    // if index is 2 then don't do anything
    if (index === 0) {
      window.location.href = "/";
    }
    if (index === 1) {
      window.location.href = "/blogs";
    }
    // if(index === 2) {

    // }
    // if (index === 0) {
    //   window.location.href = "/";
    // } else if (index === 1) {
    //   window.location.href = "/blogs";
    // } else {
    //   window.location.href = "/blogs/blog-one";
    // }
  };
  // now i just have to show the location in > blogs > blog-one > slug
  return (
    <div className="grid grid-cols-12 gap-16 mt-8 px-10">
      <div className="col-span-4">
        <details
          className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
          open
        >
          <summary className="text-lg font-semibold capitalize cursor-pointer hover:underline">
            Table of Contents
          </summary>
          <ul className="mt-4 font-in text-base">
            {blog?.toc.map((heading) => (
              <li key={heading.slug} className="hover:underline">
                <a
                  href={`#${heading.slug}`}
                  className=" data-[level=two]:pl-0  data-[level=two]:pt-2
                                       data-[level=two]:border-t border-solid border-dark/40
                                       data-[level=three]:pl-4
                                       sm:data-[level=three]:pl-6
                                       flex items-center justify-start
                                       data-[level=two]:text-lg
                                        data-[level=three]:text-base
                                       "
                >
                  {heading.level === "three" ? (
                    // <span className="flex w-1 h-1 rounded-full dark:bg-white bg-dark mr-2">
                    //   {" "}
                    // </span>
                    <span className="mr-4"> </span>
                  ) : null}
                  <span className=" text-[1rem] text-white">
                    {heading.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </details>
      </div>
      <div className="col-span-8 max-w-max dark:prose-invert prose prose-lg prose-blue">
        {/* {location.map((loc) => () => <span>{loc}</span>)} */}
        {location.map((loc, index) => (
          <span
            onClick={() => handleClick(index)}
            className="hover:text-yellow-200 hover:cursor-pointer hover:scale-200 py-8"
            key={index}
          >
            {loc}
            <span> &gt; </span>
          </span>
        ))}
        <h1 className="text-4xl font-bold">{blog?.title}</h1>
        <Card blog={blog} />
      </div>
    </div>
  );
};

export default page;
