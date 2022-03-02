const Router = require('express');
const serviceController = require('../controllers/serviceController');
const router = new Router();

router.post('/', serviceController.create);
router.get('/', serviceController.getAll);
router.get('/:id', serviceController.getOne);
router.delete('/:id', serviceController.delete);

module.exports = router;
