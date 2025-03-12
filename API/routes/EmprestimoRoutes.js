const express = require('express');

const router = express.Router();

const controllerEmprestimos = require("../../api/controllers/EmprestimoControllers");

router.get("/",controllerEmprestimos.getAll);
router.get('/edit', controllerEmprestimos.getEdit);
router.get('/delete',controllerEmprestimos.getDelete);
router.get('/sobre',controllerEmprestimos.getSobre);
router.get("/:cod", controllerEmprestimos.getCod);
router.get("/editar/:cod", controllerEmprestimos.getId);

router.get("*", function (req, res) {
    //console.log('Página não Encontrada - 404');
    res.send('<h3>Página Não Encontrada!</h3><p> Erro 404</p>')
})

module.exports = router;
