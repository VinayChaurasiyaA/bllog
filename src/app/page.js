// app/page.tsx
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlogs, Post } from "../../.contentlayer/generated";
import HomeBase from "../components/ui/HomeBase";



export default function Home() {
  // console.log(allBlogs);

  return (
    <div className="ml-[20%]">
      {/* {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))} */}
      <HomeBase blogs={allBlogs} />
    </div>
  );
}
