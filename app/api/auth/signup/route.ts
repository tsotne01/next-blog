import prisma from "@/lib/prisma";

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
    return new Response(JSON.stringify({ message: "success" }), {
      status: 201,
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ error: err }));
  }
}
