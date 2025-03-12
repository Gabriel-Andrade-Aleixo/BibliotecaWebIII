const express = require('express');

const router = express.Router();

const controllerAutors = require("../../api/controllers/AutorControllers");

router.get("/",controllerAutors.getAll);
router.get('/edit', controllerAutors.getEdit);
router.get('/delete',controllerAutors.getDelete);
router.get('/sobre',controllerAutors.getSobre);
router.get("/:cod", controllerAutors.getCod);
router.get("/editar/:cod", controllerAutors.getId);

router.get("*", function (req, res) {
    //console.log('Página não Encontrada - 404');
    res.send('<h3>Página Não Encontrada!</h3><p> Erro 404</p>')
})

module.exports = router;
