// -> Importando o express...
import express from 'express';

// -> Importando a função que mostra todos os usuários:
import { getAllUsers, postNewUser, deleteUser, uptadeUser } from '../controllers/userController.js';

// -> Variável que recebe o express():
const router = express();

// -> 1. ROTA QUE EXIBE TODOS OS USUÁRIOS!
router.get('/users', getAllUsers)

// -> 2. ROTA QUE CRIA UM NOVO USUÁRIO!
router.post('/createUser', postNewUser)

// -> 3. ROTA QUE DELETA UM USUÁRIO!
router.delete('/deleteUser/:id', deleteUser)

// -> 4. ROTA QUE ATUALIZA UM USUÁRIO!
router.patch('/updateUser/:id', uptadeUser)

// -> Exportando o router para o outro arquivo!
export default router