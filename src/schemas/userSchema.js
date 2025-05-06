import { z } from 'zod';

export const createUserSchema = z.object({
    name: z.string().min(3), // -> String e com número minímo de 3 letras.
    email: z.string().email(), // -> String e valida somente email.
    password: z.string().regex(/[A-Z]/) // -> String e regex.
})
