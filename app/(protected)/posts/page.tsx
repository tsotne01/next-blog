import PostComponent from "@/components/post-component";
import axios from "axios";
import Link from "next/link";

async function page() {
  const response = await axios.get("http://localhost:3000/api/post");

  return (
    <div className="flex flex-wrap justify-center gap-5 w-full h-full mx-auto max-w-7xl">
      {response.data?.map(
        (post: { id: string; title: string; content: string }) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <PostComponent title={post.title} content={post.content} />
          </Link>
        ),
      )}
    </div>
  );
}

export default page;
