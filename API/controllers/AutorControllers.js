const AutorsModels = require("../models/AutorModels.js")

module.exports = {
    getEdit,
    getDelete,
    getSobre,
    getAll,
    getCod,
    getId,
}

const Autors = require("../JSON/Autor.json");
console.log(Autors);

function getAll(req, res) {
    console.log("Lendo Autors...\n", Autors)
    return res.json(Autors)
};

function getEdit(req, res) {
    console.log('Editando o Autors: ');
    res.send('<h3> Rota de Edição de Autors  </h3>');
}

function getDelete(req, res) {
    console.log('Excluindo o Autors: ');
    res.send('<h3> Rota de Exclusão de Autors  </h3>');
};

function getSobre(req, res) {
    console.log('Rota Sobre Encontrada!!!');
    res.send('<h3> Rota Sobre Encontrada! <br> Saiba Mais Sobre a Nossa Escola e nossos Autors!!!!</h3>');
};

function getCod(req, res) {
    let codigo = req.params.cod;
    console.log('Localizado o Autors: ', Autors[codigo]);
    return res.json(Autors[codigo]);
};

function getId(req, res) {
    let p_codigo = req.params.cod;
    console.log("Código do Autors recebido: ", p_codigo);
    AutorsModels.getByIdAutors(p_codigo)
    res.send("Retorno da Model!!!");
}