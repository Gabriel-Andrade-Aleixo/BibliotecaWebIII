module.exports = {
    getByIdAutors
}


const Autors = require("../JSON/Autor.json");
console.log(Autors);

function getByIdAutors(p_codigo, retorno){
    console.log("Pesquisando o Autor" + p_codigo + "no Vetor de Autors!");
    retorno = Autors.filter((Autor) => Autor.id == p_codigo)
    console.log("Retorno da Model Autors: ", retorno)
}