import { z } from "zod";

export const AuthCredentialsValidatorSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export type AuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidatorSchema
>;
