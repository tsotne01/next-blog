import prisma from "@/lib/prisma";

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
  return new Response(
    JSON.stringify({ message: "Authorization successful", token: "sdadasd" }),
    { status: 200 },
  );
}
