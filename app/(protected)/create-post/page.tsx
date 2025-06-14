"use client";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CreatePostSchema = z.object({
  title: z.string().min(1, { message: "Title is Required" }),
  content: z.string().min(1, { message: "Content is Required" }),
});

type CreatePostType = z.infer<typeof CreatePostSchema>;

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(CreatePostSchema),
  });
  const onSubmit = async (data: CreatePostType) => {
    try {
      await axios.post("http://localhost:3000/api/post", {
        data: {
          title: data.title,
          content: data.content,
          author: {
            connect: {
              id: "684db2949c9d269ce99c365e",
            },
          },
          slug: String(crypto.randomUUID()),
        },
      });
      console.log("succesfully posted post!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card className="px-6 py-10 ">
      <CardTitle className="text-center text-5xl">Create Post</CardTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="title">Post Title</Label>
          <Input id="title" placeholder="title" {...register("title")} />
          {errors.title && (
            <p className="text-red-400 text-sm">{errors.title.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            placeholder="Write Your Post here"
            {...register("content")}
            className="min-h-80"
          />
          {errors.content && (
            <p className="text-red-400 text-sm">{errors.content.message}</p>
          )}
        </div>
        <Button
          disabled={isSubmitting}
          className="mt-10 disabled:bg-slate-500 disabled:text-black/50 cursor-pointer"
        >
          Publish Post
        </Button>
      </form>
    </Card>
  );
}

export default Page;
