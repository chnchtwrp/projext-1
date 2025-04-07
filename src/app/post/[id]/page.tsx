import { notFound } from "next/navigation";
import { PrismaClient } from "@prisma/client";
// import { prisma } from "@/lib/prisma";

const prisma = new PrismaClient();

interface PostPageProps {
  params: { id: string };
}

// const getPost = async (id: string) => {
//   const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
//     cache: "no-store",
//   });
//   console.log("res is", res.status);
//   if (!res.ok) return null;
//   return res.json();
// };

const getPostsById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  console.log("res is", res.status);
  if (!res.ok) return null;
  return res.json();
};

// const page = async ({ params }: PostPageProps) => {
const page = async (
  req: Request,
  params: { params: Promise<{ id: string }> }
) => {
  const PostId = req;
  // console.log("Post ID : ", Promise. );
  // const post = await getPost(params.id);
  // const post = await prisma.post.findUnique({
  //   where: {
  //     id: params.id,
  //   },
  // });

  // if (!post) return notFound();
  // console.log(req);
  // const post = await getPostsById(PostId);

  return (
    <main className="max-w-2xl mx-auto p-4">
      {/* <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600 mt-2">{post.content}</p>
      <p className="text-sm text-gray-400 mt-4">
        Posted date {new Date(post.createdAt).toLocaleDateString()}
      </p> */}
    </main>
  );
};

export default page;
