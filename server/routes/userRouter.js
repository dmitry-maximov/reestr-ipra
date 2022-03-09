const Router = require('express');
const userController = require('../controllers/userController');
const router = new Router();

router.get('/', userController.getAll);
router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.delete('/:id', userController.delete);

module.exports = router;
