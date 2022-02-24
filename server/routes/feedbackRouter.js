const Router = require('express');
const feedbackController = require('../controllers/feedbackController');
const router = new Router();

router.post('/', feedbackController.create);
module.exports = router;
