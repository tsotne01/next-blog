import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const body = await req.json();
  const { title, content, slug } = body.data;
  const cookie = await cookies();
  const token = cookie.get("auth_token");
  if (!token)
    return new Response(JSON.stringify({ message: "permission denied" }), {
      status: 403,
    });
  const data = jwt.verify(token.value, process.env.JWT_PASSCODE || "secretkey");

  try {
    await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: {
            id: data?.id,
          },
        },
        slug,
      },
    });
    return new Response(
      JSON.stringify({ message: "Created new post Succesfully" }),
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany();
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
