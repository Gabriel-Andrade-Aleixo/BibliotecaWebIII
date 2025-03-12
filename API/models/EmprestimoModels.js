module.exports = {
    getByIdEmprestimos
}


const Emprestimos = require("../JSON/Emprestimo.json");
console.log(Emprestimos);

function getByIdEmprestimos(p_codigo, retorno){
    console.log("Pesquisando o Emprestimo" + p_codigo + "no Vetor de Emprestimos!");
    retorno = Emprestimos.filter((Emprestimo) => Emprestimo.id == p_codigo)
    console.log("Retorno da Model Emprestimos: ", retorno)
}