const router = require('express').Router();
const controller = require('../controllers/boards');

const boardController = new controller();

router.post('/', boardController.add);
router.put('/:id', boardController.update);

module.exports = router;
