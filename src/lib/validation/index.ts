import { Education } from './../../pages/education/index';
import { z } from "zod";

export const LoginSchema = z.object({
  registration: z
    .string()
    .min(1, { message: "A matricula é obrigatória." }),
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


export const EducationSchema = z.object({
  institution: z.string().min(1, { message: "A instituição é obrigatória." }),
  course: z.string().min(1, { message: "O curso é obrigatório." }),
  start_date: z.string().min(1, { message: "A data de início é obrigatória." }),
  end_date: z.string().min(1, { message: "A data de término é obrigatória." }),
  description: z.string().optional(),

});

export type EducationSchema = z.infer<typeof EducationSchema>;

export const ExperienceSchema = z.object({
  title: z.string().min(1, { message: "O título é obrigatório." }),
  intitution: z.string().min(1, { message: "A instituição é obrigatória." }),
  start_date: z.string().min(1, { message: "A data de início é obrigatória." }),
  end_date: z.string().min(1, { message: "A data de término é obrigatória." }),
  description: z.string().optional(),
});

export type ExperienceSchema = z.infer<typeof ExperienceSchema>;


