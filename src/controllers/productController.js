// -> Importando o PrismaClient:
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

// -> 1. (POST) - Criar um novo produto:
export const postNewProduct = async (req,res) => {
    const { name, description, price, stock, createdAt} = req.body
    try {
        const newProduct = await prisma.product.create({
            data: {
                name,
                description,
                price,
                stock,
                createdAt
            }
        })
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(400).json(`
            
            Erro ao criar um novo produto:
            name: ${error.name}
            messagem: ${error.message}
        
            `)
    }

}

// -> 2. (GET) - Listar todos os produtos:
export const getAllProducts = async(req,res) => {
    try {
        const products = await prisma.product.findMany()
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json(`
            
            Erro ao listar todos os produtos:
            name: ${error.name}
            messagem: ${error.message}
        
            `)
    }
}

// -> 3. (GET) - Buscar um produto pelo ID:
export const getProductsID = async (req,res) => {
    const id = req.params.id
    try {
        const produto = await prisma.product.findUnique({
            where: {id: Number(id)}
        })
        res.status(200).json(produto)
    } catch (error) {
        res.status(400).json(`
            
            Erro ao procurar o produto por ID:
            name: ${error.name}
            messagem: ${error.message}
        
            `)
    }
}

// -> 4. (PUT) - Atualizar um produto pelo ID:
export const putUptadeProduct = async (req,res) => {
    const id = req.params.id
    const { name, description, price, stock, createdAt} = req.body
    try {
        const updatedProduct = await prisma.product.update({
            where: {id: parseInt(id)},
            data: {
                name,
                description,
                price,
                stock,
                createdAt
            }
        })
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(400).json(`
            
            Erro ao atualizar produto pelo ID:
            name: ${error.name}
            messagem: ${error.message}
        
            `)
    }
} 

// -> 5. (DELETE) - Remover um produto pelo ID:
export const deleteProduct = async (req,res) => {
    const id = req.params.id
    const productDeleted = await prisma.product.delete({
        where: {id: Number(id)}
    })
    res.status(204).json(productDeleted)
}

