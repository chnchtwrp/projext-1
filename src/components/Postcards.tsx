import Link from "next/link";
import React from "react";

type Props = {};

const Postcards = ({ post }: { post: any }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold">Simple Post</h2>
      <p className="text-slate-400"> post.content.substring(0,100)...</p>
      <Link href={``} className="text-blue-500 mt-2 inline-block">
        Read more
      </Link>
    </div>
  );
};

export default Postcards;
