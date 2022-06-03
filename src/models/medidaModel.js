var database = require("../database/config");

function votar(idClube) {
    instrucaoSql = `INSERT INTO votacao (fkClube) VALUES (${idClube});`
    console.log("Executando instrução SQL: \n" +  instrucaoSql)
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas(idClube) {
    instrucaoSql = `select 
                    nomeClube, 
                    count(fkClube)
                    as idVotacao
                    FROM clube
                    JOIN votacao ON fkClube = idClube GROUP BY fkClube ORDER BY fkClube;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idClube) {
    instrucaoSql = `select 
                nomeClube, 
                count(fkClube)
                as idVotacao
                FROM clube
                JOIN votacao ON fkClube = idClube GROUP BY fkClube ORDER BY fkClube;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    votar,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}