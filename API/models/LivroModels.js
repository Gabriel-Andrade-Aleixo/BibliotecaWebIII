module.exports = {
    getByIdLivros
}


const Livros = require("../JSON/Livro.json");
console.log(Livros);

function getByIdLivros(p_codigo, retorno){
    console.log("Pesquisando o livro" + p_codigo + "no Vetor de Livros!");
    retorno = Livros.filter((livro) => livro.id == p_codigo)
    console.log("Retorno da Model Livros: ", retorno)
}