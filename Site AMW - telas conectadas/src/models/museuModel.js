var database = require("../database/config")


function rr(nomeMuseu, cep, numero, complemento, cnpj, qtdSecao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function rr():");
    var instrucaoSql = `
    insert into museu (nomeMuseu, cep, numero, complemento ,cnpj, qtdSecao) values('${nomeMuseu}','${cep}','${numero}','${complemento}','${cnpj}','${qtdSecao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar() {
    var instrucaoSql = `SELECT * FROM museu`;
    return database.executar(instrucaoSql);
  }
  

module.exports = {
    rr,
    listar
};