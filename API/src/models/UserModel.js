const { connection } = require(`../config/db`);

// const modelUser = {

//     insertUser: async (user) => {
//         try {
//             const conn = await connection();
//             const sql = 'INSERT INTO user (NOME, DATA_NASC, CPF, SEXO, ESTADO_CIVIL, EMAIL, TELEFONE) VALUES (?,?,?,?,?,?,?);';
//             const values = [user.NOME, user.DATA_NASC, user.CPF, user.SEXO, user.ESTADO_CIVIL, user.EMAIL, user.TELEFONE];
//             return await conn.query(sql, values);
//         } catch (error) {
//             throw error;
//         }
//     }
// }

// module.exports = modelUser;

class Cliente {

    constructor(pId, pNome, pDataNasc, pCpf, pSexo, pEstadoCivil, pEmail, pTelefone) {
        this.ID = pId;
        this.NOME = pNome;
        this.DataConvert(pDataNasc);
        this.CPF = pCpf;
        this.SEXO = pSexo;
        this.ESTADO_CIVIL = pEstadoCivil;
        this.EMAIL = pEmail;
        this.TELEFONE = pTelefone;

    }

    get Nome() { return this.NOME; }
    set Nome(value) { this.NOME = value }

    get Data_nasc() { return this.DATA_NASC; }
    set Data_nasc(value) {
        this.DATA_NASC = value;
    }
    get Cpf() { return this.CPF; }
    set Cpf(value) { this.CPF = value }

    get Sexo() { return this.SEXO; }
    set Sexo(value) { this.SEXO = value }

    get Estado_civil() { return this.ESTADO_CIVIL; }
    set Estado_civil(value) { this.ESTADO_CIVIL = value }

    get Email() { return this.EMAIL; }
    set Email(value) { this.EMAIL = value }

    get Telefone() { return this.TELEFONE; }
    set Telefone(value) { this.TELEFONE = value }


    // calcularIdade() {
    //     if (this.nascimento == undefined) return 0;
    //     let hoje = new Date();
    //     let difAno = hoje.getFullYear() - this.nascimento.getFullYear();
    //     console.log(difAno);
    //     let difMes = hoje.getMonth() - this.nascimento.getMonth();
    //     console.log(difMes);
    //     let difDia = hoje.getDate() - this.nascimento.getDate();
    //     console.log(difDia);
    //     if (difMes < 0 || (difMes == 0 && difDia < 0)) {
    //         difAno--;
    //     }
    //     return difAno;
    // }
    DataConvert(value) {
        let [dia, mes, ano] = value.split('/'); //       19/01/2002
        let dataFormatada = `${ano}-${mes}-${dia}`;
        this.Data_nasc = dataFormatada;
        // console.log(this.Data_nasc);
    }
    create() {
        const sql = 'INSERT INTO user (NOME, DATA_NASC, CPF, SEXO, ESTADO_CIVIL, EMAIL, TELEFONE) VALUES (?,?,?,?,?,?,?);';
        const params = [];
        // executeSQLQueryParams(sql, params);
    }
    
}

module.exports = Cliente;