const { connection } = require(`../config/db`);

const modelUser = {

    insertUser: async (user) => {
        try {
            const conn = await connection();
            const sql = 'INSERT INTO user (NOME, DATA_NASC, CPF, SEXO, ESTADO_CIVIL, EMAIL, TELEFONE) VALUES (?,?,?,?,?,?,?);';
            const values = [user.NOME, user.DATA_NASC, user.CPF, user.SEXO, user.ESTADO_CIVIL, user.EMAIL, user.TELEFONE];
            return await conn.query(sql, values);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = modelUser;