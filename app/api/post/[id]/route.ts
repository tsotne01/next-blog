import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;
  console.log("id issssss:", id);
  console.log("fired function");
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    if (!post) {
      return new Response(JSON.stringify({ message: "something went wront" }), {
        status: 500,
      });
    }
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "something went wrong" }), {
      status: 500,
    });
  }
}
