const express = require('express');

const router = express.Router();

const controllerIndex = require('../../api/controllers/IndexControllers');

router.get('/', controllerIndex.index);
router.get('/projetoejs', controllerIndex.indexProjeto);
router.get('*', controllerIndex.indexNotFound);




module.exports = router