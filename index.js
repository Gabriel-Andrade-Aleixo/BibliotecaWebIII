const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const index = require('./api/routes/indexRoutes')
// const usuarios = require('./api/routes/UserRoutes')
const livros = require('./API/routes/LivroRoutes')
const autores = require('./api/routes/AutorRoutes')
const emprestimos = require('./api/routes/EmprestimoRoutes')

// console.log({ index, usuarios, livros, autores, emprestimos });

// app.use('/usuarios', usuarios);
app.use('/livros', livros);
app.use('/emprestimos', emprestimos);
app.use('/autores', autores);
app.use('/', index);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});