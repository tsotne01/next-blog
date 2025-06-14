"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignInSchema } from "@/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import type { SignInType } from "@/types/types";
import { useRouter } from "next/navigation";

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: zodResolver(SignInSchema),
  });
  const router = useRouter();

  const onSubmit = async (data: SignInType) => {
    try {
      const resp = await axios.post("/api/auth/signin", {
        email: data.email,
        password: data.password,
      });
      console.log(resp);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-[30%] w-1/2 sm:min-w-sm min-w-[80%]">
      <h1 className="text-3xl font-bold mb-5 text-center">Sign In</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" {...register("email")} />
          {errors.email && (
            <p className="text-red-400 font-normal text-sm">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" {...register("password")} />
          {errors.password && (
            <p className="text-red-400 font-normal text-sm">
              {errors.password?.message}
            </p>
          )}
          <span className="text-sm flex gap-1.5 justify-end">
            <span className="text-sm">Already have an account?</span>
            <Link
              className="text-blue-300 hover:text-blue-100 underline transition"
              href={"/signup"}
            >
              Signup
            </Link>
          </span>
        </div>

        <Button className="mt-6" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Page;
