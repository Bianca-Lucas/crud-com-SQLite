import { z } from 'zod';

export const createUserSchema = z.object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"), // -> String e com número minímo de 3 letras.
    email: z.string().email("Email Inválido"), // -> String e valida somente email.
    password: z.string()
        .min(6, "A senha deve ter no minímo 6 caracteres")
        .regex(/[A-Z]/, "A senha deve ter pelo menos uma letra maiúscula")
})

export const updateUserSchema = z.object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres").optional(),
    email: z.string().email("Email Inválido").optional(), 
    password: z.string()
        .min(6, "A senha deve ter no minímo 6 caracteres")
        .regex(/[A-Z]/, "A senha deve ter pelo menos uma letra maiúscula").optional()
})