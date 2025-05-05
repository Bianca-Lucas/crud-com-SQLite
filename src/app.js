// -> Importando o 'express'
import express from 'express';

// -> Importando a Rota Usuários para o arquivo 'app.js'!
import userRoutes from './routes/userRoutes.js';

// -> Variável que recebe o 'express'!
const app = express()

// -> Permite que o 'express()' entenda '.json' no corpo da requisição!
app.use(express.json())

// -> Define o endpoint '/users' para as rotas de usuários!
app.use("/users", userRoutes)

export default app