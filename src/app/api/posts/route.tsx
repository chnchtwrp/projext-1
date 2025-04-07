import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
    return Response.json(posts);
  } catch (error) {
    return Response.json({ error: "Error fetching posts" }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const { title, content } = await req.json();

    if (!title || !content) {
      return Response.json(
        { error: "Title and content are required !!" },
        { status: 400 }
      );
    }

    const newPost = await prisma.post.create({
      data: { title, content },
    });
    return Response.json(newPost, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Error creating post" }, { status: 500 });
  }
};
