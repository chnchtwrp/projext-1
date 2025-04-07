import Postcards from "@/src/components/postCard/Postcards";
import Link from "next/link";
import React from "react";

const getPosts = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  return res.json();
};

const page = async () => {
  const posts = await getPosts();

  return (
    <main>
      <div className="justify-items-center">
        <h1 className="text-3xl font-bold">Simple Blog📝</h1>
        <div className="grid grid-cols-3 gap-4 pt-14 pb-10">
          {posts.length > 0 ? (
            posts.map((post: any) => <Postcards key={post.id} post={post} />)
          ) : (
            <p className="text-slate-500">Empty Blog Post</p>
          )}
        </div>
        <Link
          href="/post/create"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Create new post
        </Link>
      </div>
    </main>
  );
};

export default page;
