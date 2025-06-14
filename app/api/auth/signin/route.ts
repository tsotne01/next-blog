import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const body = await req.json();
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (!user) {
    return new Response(
      JSON.stringify({ message: "Email or Password is Incorrect" }),
    );
  }

  if (user.hashedPassword !== body.password) {
    return new Response(
      JSON.stringify({ message: "Email or Password is Incorrect" }),
      { status: 401 },
    );
  }
  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_PASSCODE || "secretpasscode",
    { expiresIn: "1h" },
  );
  const cookie = await cookies();

  cookie.set("auth_token", token);

  return new Response(JSON.stringify({ message: "Authorization successful" }), {
    status: 200,
  });
}
