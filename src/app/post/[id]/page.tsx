import { notFound } from "next/navigation";

const getPost = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
};

const page = async ({ params }: { params: { id: string } }) => {
  const post = await getPost(params.id);

  if (!post) return notFound();

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600 mt-2">{post.content}</p>
      <p className="text-sm text-gray-400 mt-4">
        Posted date {new Date(post.createdAt).toLocaleDateString()}
      </p>
    </main>
  );
};

export default page;
