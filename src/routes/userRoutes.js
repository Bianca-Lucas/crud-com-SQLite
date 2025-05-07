// -> Importando o express...
import express from 'express';

// -> Importando a função que mostra todos os usuários:
import { getAllUsers, postNewUser, deleteUser, uptadeUser, searchInfor, registerUser } from '../controllers/userController.js';

// -> Importando a função de validação de dados:
import { validate } from '../middleware/validate.js';

// -> Importando as funções de Schema:
import { createUserSchema, updateUserSchema } from '../schemas/userschema.js';

// -> Variável que recebe o express():
const router = express();

// -> 1. ROTA QUE EXIBE TODOS OS USUÁRIOS!
router.get('/users', getAllUsers)

// -> 2. ROTA QUE CRIA UM NOVO USUÁRIO!
router.post('/createUser', validate(createUserSchema), postNewUser)

// -> 3. ROTA QUE DELETA UM USUÁRIO!
router.delete('/deleteUser/:id', deleteUser)

// -> 4. ROTA QUE ATUALIZA UM USUÁRIO!
router.patch('/updateUser/:id', validate(updateUserSchema), uptadeUser)

// -> 5. ROTA QUE PEGUE AS INFORMAÇÕES DE UM USUÁRIO ATRAVÉS DO ID!
router.get('/users/:id', searchInfor)

// -> 6. ROTA QUE REGISTRA UM NOVO USUÁRIO!
router.post('/register', registerUser)

// -> Exportando o router para o outro arquivo!
export default router