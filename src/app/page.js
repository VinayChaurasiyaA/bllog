// app/page.tsx
"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18n from "../translation";
import { useContext } from "react";

import { compareDesc, format, parseISO } from "date-fns";
import { allBlogs, Post } from "../../.contentlayer/generated";
import HomeBase from "../components/ui/HomeBase";
import { LanguageContext } from "../Provider/Provider";
// TODO: create a contextApi and store the language choosen by the user and then use it in the translation button
export default function Home() {
  // console.log(allBlogs);
  // const { lng, setLng } = useContext(LanguageContext);
  // console.log("Language from useContext", useContext(LanguageContext));
  // console.log("Language from useContext lng", lng);
  // const { t } = useTranslation();

  return (
    <div className="ml-[20%]">
      {/* {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))} */}
      {/* <h1>{t("Hello")}</h1>
      <h1>{lng}</h1> */}
      <HomeBase blogs={allBlogs} />
    </div>
  );
}
