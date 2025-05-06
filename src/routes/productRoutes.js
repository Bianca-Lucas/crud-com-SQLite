// -> Importando o express:
import express from 'express';

// -> Importando as funções...
import { deleteProduct, getAllProducts, getProductsID, postNewProduct, putUptadeProduct } from '../controllers/productController.js';

// -> Importando a função de validação de dados:
import { validate } from '../middleware/validate.js';

// -> Importando as funções de Schema:
import { createProductSchema } from '../schemas/productSchema.js';

// -> Variável que recebe o express():
const router = express()

// -> 1. ROTA QUE CRIA UM NOVO USUÁRIO:
router.post("/products", validate(createProductSchema), postNewProduct)

// -> 2. ROTA QUE LISTA TODOS OS PRODUTOS:
router.get("/products", getAllProducts)

// -> 3. ROTA QUE LISTA O PRODUTO POR ID:
router.get("/products/:id", getProductsID)

// -> 4. ROTA QUE ATUALIZA UM PRODUTO POR ID:
router.put("/products/:id", putUptadeProduct)

// -> 5. ROTA QUE DELETA UM PRODUTO POR ID:
router.delete("/products/:id", deleteProduct)

// -> Exportando o router para o outro arquivo!
export default router