// -> Importando o PrismaClient...
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

// -> 1. Função para exibir todos os usuários:
export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
        mensagem: "Erro ao buscar todos os usuários!",
        erro: error.message
        })
    }
}

// -> 2. Função para criar um novo usuário:
export const postNewUser = async (req, res) => {
    const {name, email} = req.body
    try {
        const newUser = await prisma.user.create({
            data:{
                name,
                email
            }
        })
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao criar o novo usuário!",
            erro: error.message
        })
    }
}

// -> 3. Função para deletar um usuário
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        await prisma.user.delete({
        where: { id: Number(id) },
        });
        res.status(204)
    } catch (error) {
        res.status(400).json({
            mensagem: "Erro ao deletar usuário!",
            erro: error.message
        })
    }
    
}

export const uptadeUser = async (req, res) => {
    const id = req.params.id
    const {name, email} = req.body
    try {
        const updateUser = await prisma.user.update({
            where: { id: parseInt(id) },
            data: {name, email}
    })
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(400).json({
        mensagem: "Erro ao atualizar usuário!",
        erro: error.message
    })
}
}