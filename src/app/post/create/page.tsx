"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {};

const create = (props: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    if (res.ok) {
      alert("Created post completed !!");
      router.push("/");
    }
  };

  return (
    <main className="max-w-2xl m-auto p-4 justify-center">
      <h1 className="text-4xl font-bold pb-4 text-center"> Create new post</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="pb-4">
          <label className="text-lg font-[600]">Post title</label>
          <br />
          <input
            type="text"
            placeholder="Post title"
            value={title}
            onChange={handleTitleChange}
            className="w-full border p-2 rounded-lg"
            required
          />
        </div>
        <div className="pb-4">
          <label className="text-lg font-[600]">Post content</label>
          <br />
          <textarea
            name=""
            id=""
            placeholder="Post content"
            value={content}
            onChange={handleContentChange}
            className="w-full border p-2 rounded-lg h-60"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 font-[700] text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default create;
