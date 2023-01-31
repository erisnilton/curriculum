import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "O Email é obrigatório." })
    .email({ message: "Digite um email válido." }),
  password: z.string().min(1, { message: "A Senha é obrigatório." }),
});

export type LoginSchema = z.infer<typeof LoginSchema>;
