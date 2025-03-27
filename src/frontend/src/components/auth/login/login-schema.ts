import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email format."),
  password: z.string().min(1, "Password cannot be empty."),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
