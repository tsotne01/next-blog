import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const user = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        hashedPassword: body.password,
      },
    });
    console.log(user);
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_PASSCODE || "secretpasscode",
      { expiresIn: "1h" },
    );
    const cookie = await cookies();
    cookie.set("auth_token", token);

    return new Response(JSON.stringify({ message: "success", token }), {
      status: 201,
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ error: err }));
  }
}
