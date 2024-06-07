var museuModel = require("../models/museuModel");

function rr(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeMuseu = req.body.nomeMuseuServer;
    var cep = req.body.cepServer;
    var numero = req.body.numeroServer;
    var complemento = req.body.complementoServer;
    var cnpj = req.body.cnpjServer;
    var qtdSecao = req.body.qtdSecaoServer;

    // Faça as validações dos valores
    if (nomeMuseu == undefined) {
        res.status(400).send("Seu nomeMuseu está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu numero está undefined!");
    } else if (complemento == undefined) {
        res.status(400).send("Sua complemento está undefined!");
    }else if (cnpj == undefined) {
        res.status(400).send("Sua cnpj está undefined!");
    }else if (qtdSecao == undefined) {
        res.status(400).send("Sua qtdSecao está undefined!");
    }
     else {
        museuModel.rr(nomeMuseu, cep, numero, complemento, cnpj, qtdSecao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function listar(req, res) {
    museuModel.listar().then((resultado) => {
      res.status(200).json(resultado);
    });
  }

module.exports = {
    rr,
    listar
}
