import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "O email é obrigatório." })
    .email({ message: "Digite um email válido." }),
  password: z.string().min(6, { message: "A senha deve ter no minimo 6 caracteres." }),
});

export type LoginSchema = z.infer<typeof LoginSchema>;
