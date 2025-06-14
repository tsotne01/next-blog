import type { SignUpSchema } from "@/schemas/schemas";
import type { z } from "zod";

export type SignUpType = z.infer<typeof SignUpSchema>;
export type SignUpTypeWithUserName = {
  email: string;
  password: string;
  username: string;
};

export type SignInType = {
  email: string;
  password: string;
};
