import Postcards from "@/components/Postcards";
import React from "react";

// const getPosts = async () => {
//   const res = await fetch("http://localhost:3000/api/posts", {
//     cache: "no-store",
//   });
//   return res.json();
// };

const page = async () => {
  // const posts = await getPosts();
  return (
    <main>
      <div className="justify-items-center">
        <h1 className="text-3xl font-bold">Simple Blog📝</h1>
        <div className="space-y-4">
          {/* {posts.length > 0 ? (
            posts.map((post: any) => <Postcards key={post.id} post={post} />)
          ) : (
            <p className="text-slate-500">Empty Blog Post</p>
          )} */}
        </div>
      </div>
    </main>
  );
};

export default page;
