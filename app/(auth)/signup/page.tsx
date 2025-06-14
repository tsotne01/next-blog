"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignUpSchema } from "@/schemas/schemas";
import type { SignUpType } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(SignUpSchema),
  });
  const router = useRouter();

  const onSubmit = async (credentials: SignUpType) => {
    console.log(credentials);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          email: credentials.email,
          username: credentials.username,
          password: credentials.password,
        },
      );
      console.log(response);
      router.push("/posts");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-[30%] w-1/2 sm:min-w-sm min-w-[80%]">
      <h1 className="text-3xl font-bold mb-5 text-center">Sign Up</h1>

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
          <Label htmlFor="user-name">User name</Label>
          <Input id="user-name" {...register("username")} />
          {errors.username && (
            <p className="text-red-400 font-normal text-sm">
              {errors.username?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="pasword" type="password" {...register("password")} />
          {errors.password && (
            <p className="text-red-400 font-normal text-sm">
              {errors.password?.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-400 font-normal text-sm">
              {errors.confirmPassword?.message}
            </p>
          )}
          <span className="text-sm flex gap-1.5 justify-end">
            <span className="text-sm">Already Have A Account?</span>
            <Link
              className="text-blue-300 hover:text-blue-100 underline transition"
              href={"/signin"}
            >
              Signin
            </Link>
          </span>
        </div>
        <Button className="mt-6" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}

export default Page;
