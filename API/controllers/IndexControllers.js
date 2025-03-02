
module.exports = {
    index,
    indexProjeto,
    indexNotFound,
}

function index(req, res) {
    console.log('Rota inicial dos professores');
    res.send('<h3> Rota Raiz Encontrada!!!</h3>');
}

function indexProjeto(req, res) {
    res.send('Index Acessado');
}

function indexNotFound(req, res) {
    res.send('<h3>Página Não Encontrada!</h3><p> Erro 404</p>')
}