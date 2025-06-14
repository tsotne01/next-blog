import { z } from "zod";

export const SignUpSchema = z
  .object({
    email: z.string().email({ message: "Invalid Email" }).min(1),
    username: z.string().min(1, { message: "Username is required." }),
    password: z
      .string()
      .min(8, { message: "Password Must Be At Least 8 Characters Long" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password Must Be At Least 8 Characters Long" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(8, { message: "Password Must Be At Least 8 Character Long" }),
});
