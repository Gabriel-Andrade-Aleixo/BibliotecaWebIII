const EmprestimosModels = require("../models/EmprestimoModels.js")

module.exports = {
    getEdit,
    getDelete,
    getSobre,
    getAll,
    getCod,
    getId,
}

const Emprestimos = require("../JSON/Emprestimo.json");
console.log(Emprestimos);

function getAll(req, res) {
    console.log("Lendo Emprestimos...\n", Emprestimos)
    return res.json(Emprestimos)
};

function getEdit(req, res) {
    console.log('Editando o Emprestimos: ');
    res.send('<h3> Rota de Edição de Emprestimos  </h3>');
}

function getDelete(req, res) {
    console.log('Excluindo o Emprestimos: ');
    res.send('<h3> Rota de Exclusão de Emprestimos  </h3>');
};

function getSobre(req, res) {
    console.log('Rota Sobre Encontrada!!!');
    res.send('<h3> Rota Sobre Encontrada! <br> Saiba Mais Sobre a Nossa Escola e nossos Emprestimos!!!!</h3>');
};

function getCod(req, res) {
    let codigo = req.params.cod;
    console.log('Localizado o Emprestimos: ', Emprestimos[codigo]);
    return res.json(Emprestimos[codigo]);
};

function getId(req, res) {
    let p_codigo = req.params.cod;
    console.log("Código do Emprestimos recebido: ", p_codigo);
    EmprestimosModels.getByIdEmprestimos(p_codigo)
    res.send("Retorno da Model!!!");
}