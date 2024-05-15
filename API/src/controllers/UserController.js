// const UserModel = require('../models/UserModel')

// const UserController = {

//     adicionarUser: async (req, res) => {
//         try {
//             const { NOME, DATA_NASC, CPF, SEXO, ESTADO_CIVIL, EMAIL, TELEFONE } = req.body;
//             const result = await UserModel.insertUser({ NOME: NOME, DATA_NASC: DATA_NASC, CPF: CPF, SEXO: SEXO, ESTADO_CIVIL: ESTADO_CIVIL, EMAIL: EMAIL, TELEFONE: TELEFONE, });
//             console.log(result);
//             return res.json(result);

//         } catch (error) {
//             throw error
//         }
//     }
// };

// module.exports = UserController;


const Cliente = require('../models/UserModel');

const userController = {
    adicionaUser: async (req, res) => {
        try {
            const { NOME, DATA_NASC, CPF, SEXO, ESTADO_CIVIL, EMAIL, TELEFONE } = req.body;

            const objCliente = new Cliente(null, NOME, DATA_NASC, CPF, SEXO, ESTADO_CIVIL, EMAIL, TELEFONE);
            const result = await create(objCliente);

            return res.json(result);

        } catch (error) {
            console.log(error);
            res.json(error);
        }
    },
};

module.exports = userController