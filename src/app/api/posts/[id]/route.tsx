import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET by ID /api/posts/:id
export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: params.id },
    });
    if (!post) {
      return Response.json({ message: "Post not found" }, { status: 404 });
    }
    return Response.json(post);
  } catch (error) {
    return Response.json({ error: "Post not found" }, { status: 404 });
  }
};

// PUT /api/posts/:id
export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const { title, content } = await req.json();

  const updated = await prisma.post.update({
    where: { id: params.id },
    data: { title, content },
  });

  return Response.json(updated);
};

// DELETE  /api/posts/:id
export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  await prisma.post.delete({
    where: { id: params.id },
  });

  return Response.json({ message: "Post deleted !" });
};
