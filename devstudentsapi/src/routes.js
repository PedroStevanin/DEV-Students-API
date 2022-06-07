const express = require('express');
const router = express.Router();

const AlunoController = require('./controllers/AlunoController');


router.get('/alunos', AlunoController.all);
router.get('/aluno/:id', AlunoController.one);
router.post('/aluno', AlunoController.new);
router.put('/aluno/:id', AlunoController.edit);
router.delete('/aluno/:id', AlunoController.delete);

module.exports = router;

