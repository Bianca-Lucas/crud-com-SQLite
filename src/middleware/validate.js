// -> Referência de Middleware:
//    Obs: sempre vai os 3 /--|--\
//                        /   |   \
export function validate(schema){
    return (req, res, next) => {
        try {
        // -> Valida o corpo da requisição contra o schema:
        const validatedData = schema.parse(req.body)
        
        // -> Substituir o body pelos dados fornecidos:
        req.body = validatedData

        // -> Chamo o próximo agente (middleware):
        next()

        } catch (error) {
            res.status(400).json({
                messagem: 'Erro de validação!',
                erros: error.errors.map(e => ({
                    path: e.path.join('.'),
                    message: e.message
                }))
            })


    }}
}