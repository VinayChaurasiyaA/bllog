import React from "react";
import Link from "next/link";
import Image from "next/image";
import { allBlogs } from "../../../.contentlayer/generated";
import { sortBlogs } from "../../utils";
import Tag from "./Tag";
import { slug } from "github-slugger";
// import i from "../../../public/blogs/";

const HomeBase = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const random = Math.floor(Math.random() * sortedBlogs.length + 1);
  const blog = sortedBlogs[random];
  //   console.log)
  //   console.log(blog.image.replace("../../public", ""));
  return (
    <div className="w-full inline-block">
      {/* <Image
        src={blog.image.replace("../../public", "")}
        //   placeholder="blur"
        alt={blog.title}
        fill
        className="w-full h-full object-center object-cover rounded-3xl -z-10"
      /> */}
      {/* Hello world */}
      <article className="w-[100vh] flex flex-col items-start justify-end mx-10 relative h-[85vh]">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl z-0 " />
        <Image
          src={blog.image.replace("../../public", "")}
          //   placeholder="blur"
          alt={blog.title}
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10 "
        />
        <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light">
          <Tag link={`/categories/`} name={blog.tags[0]} />
          <Link href={blog.url.replace("/blog-one", "")} className="mt-6">
            <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl">
              <span
                className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
              >
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className="hidden  sm:inline-block mt-4 md:text-lg lg:text-xl font-in">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeBase;
