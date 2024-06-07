var database = require("../database/config");

function buscarUltimasMedidas(idAquario) {

    var instrucaoSql =  `select umidade, dtLogg from registro`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas2() {

    var instrucaoSql =  `SELECT WEEK(dtLogg) AS Semana, AVG(umidade) AS MediaUmidade FROM registro GROUP BY Semana`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarUltimasMedidas2
}
