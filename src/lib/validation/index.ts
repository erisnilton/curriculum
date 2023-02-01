import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "O email é obrigatório." })
    .email({ message: "Digite um email válido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter no minimo 6 caracteres." }),
});

export type LoginSchema = z.infer<typeof LoginSchema>;

export const AboutSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório." }),
  surname: z.string().min(1, { message: "O sobrenome é obrigatório." }),
  title: z.string().min(1, { message: "O título é obrigatório." }),
  email: z
    .string()
    .min(1, { message: "O email é obrigatório." })
    .email({ message: "Digite um email válido." }),
  phone: z.string().min(1, { message: "O telefone é obrigatório." }),
  address: z.string().min(1, { message: "O endereço é obrigatório." }),
  about: z.string().optional(),
  image: z.string().min(1, { message: "A imagem é obrigatória." }),
});

export type AboutSchema = z.infer<typeof AboutSchema>;
