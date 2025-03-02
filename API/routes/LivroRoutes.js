const express = require('express');

const router = express.Router();

const controllerLivros = require("../../api/controllers/LivroControllers");

router.get("/",controllerLivros.getAll);
router.get('/edit', controllerLivros.getEdit);
router.get('/delete',controllerLivros.getDelete);
router.get('/sobre',controllerLivros.getSobre);
router.get("/:cod", controllerLivros.getCod);
router.get("/editar/:cod", controllerLivros.getId);

router.get("*", function (req, res) {
    //console.log('Página não Encontrada - 404');
    res.send('<h3>Página Não Encontrada!</h3><p> Erro 404</p>')
})

module.exports = router
