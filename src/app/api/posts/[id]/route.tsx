import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET by ID /api/posts/:id
export const GET = async (params: { id: string }) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: params.id },
    });
    return Response.json(post);
  } catch (error) {
    return Response.json({ error: "Post not found" }, { status: 404 });
  }
};
