import * as z from "zod";

export const signInSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z
    .string()
    .min(4, {
      message: "Password must contain at least 4 characters.",
    })
    .max(100)
    .regex(/^(?=.{4,})/, {
      message: "Password must contain at least 4 characters.",
    }),
});

export const signUpSchema = z.object({
  gender: z.enum(["male", "female", "diverse", "no indication"]),
  birthday: z.date(),
  firstname: z
    .string()
    .min(2, {
      message: "Please enter your first name.",
    })
    .max(25)
    .regex(/^(?=.{2,})/, {
      message: "Must contain at least 2 characters.",
    }),
  lastname: z
    .string()
    .min(2, {
      message: "Please enter your last name.",
    })
    .max(25)
    .regex(/^(?=.{2,})/, {
      message: "Must contain at least 2 characters.",
    }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z
    .string()
    .min(4, {
      message: "Password must be at least 4 characters long.",
    })
    .max(100)
    .regex(/^(?=.{4,})/, {
      message: "Password must contain at least 4 characters.",
    }),
});

export const verfifyEmailSchema = z.object({
  code: z
    .string()
    .min(6, {
      message: "Verification code must be 6 characters long",
    })
    .max(6),
});

export const checkEmailSchema = z.object({
  email: signInSchema.shape.email,
});

export const resetPasswordSchema = z
  .object({
    password: signInSchema.shape.password,
    confirmPassword: signInSchema.shape.password,
    code: verfifyEmailSchema.shape.code,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
