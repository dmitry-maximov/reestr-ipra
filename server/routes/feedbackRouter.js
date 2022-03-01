const Router = require('express');
const feedbackController = require('../controllers/feedbackController');
const router = new Router();

router.post('/', feedbackController.create);
router.get('/', feedbackController.getAll);
router.delete('/', feedbackController.delete);
module.exports = router;
