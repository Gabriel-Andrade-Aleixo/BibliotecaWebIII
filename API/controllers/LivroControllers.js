const LivrosModels = require("../models/LivroModels.js")

module.exports = {
    getEdit,
    getDelete,
    getSobre,
    getAll,
    getCod,
    getId,
}

const Livros = require("../JSON/Livro.json");
console.log(Livros);

function getAll(req, res) {
    console.log("Lendo Livros...\n", Livros)
    return res.json(Livros)
};

function getEdit(req, res) {
    console.log('Editando o livros: ');
    res.send('<h3> Rota de Edição de Livros  </h3>');
}

function getDelete(req, res) {
    console.log('Excluindo o livros: ');
    res.send('<h3> Rota de Exclusão de Livros  </h3>');
};

function getSobre(req, res) {
    console.log('Rota Sobre Encontrada!!!');
    res.send('<h3> Rota Sobre Encontrada! <br> Saiba Mais Sobre a Nossa Escola e nossos Livros!!!!</h3>');
};

function getCod(req, res) {
    let codigo = req.params.cod;
    console.log('Localizado o livros: ', Livros[codigo]);
    return res.json(Livros[codigo]);
};

function getId(req, res) {
    let p_codigo = req.params.cod;
    console.log("Código do livros recebido: ", p_codigo);
    LivrosModels.getByIdLivros(p_codigo)
    res.send("Retorno da Model!!!");
}