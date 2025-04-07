import Link from "next/link";
import React from "react";

type Props = {};

const Postcards = ({ post }: { post: any }) => {
  return (
    <div className=" border rounded-lg px-6 py-6 shadow-md min-h-60 w-60 ">
      <h2 className="text-xl font-semibold overflow-clip wrap-anywhere ">
        {post.title}
      </h2>
      {/* <h2 className="text-xl font-semibold">Simple Post</h2> */}
      <p className="text-slate-400 overflow-clip wrap-anywhere ">
        {post.content.substring(0, 60)}
      </p>
      <Link
        // href={`/post/${post.id}`}
        href={`/post/${post.id}`}
        className="text-blue-500 mt-2 inline-block "
      >
        {/* <Link href={``} className="text-blue-500 mt-2 inline-block"> */}
        Read more
      </Link>
    </div>
  );
};

export default Postcards;
