// -> Importando o bcrypt..
import bcrypt from 'bcrypt'

// -> Importando o jwt...
import jwt from "jsonwebtoken"

// -> Variável que recebe o saltrounds:
const SALT_ROUNDS = 10;

// -> Variável que recebe o 'secret':
const JWT_SECRET = process.env.JWT_SECRET

// -> 1. Função para hashear a senha do usuário:
export async function hashPassword (password){
    return await bcrypt.hash(password, SALT_ROUNDS)
}

// -> 2. Função para criar um token JWT
export function generateToken(user) {
    return jwt.sign({
        id: user.id, 
        email: user.email
    },
    JWT_SECRET,
    {expiresIn:'1h'}
)}