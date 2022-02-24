const Router = require('express');
const router = new Router();
const organizationRouter = require('./organizationRouter');
const serviceRouter = require('./serviceRouter');
const typeRouter = require('./typeRouter');
const feedbackRouter = require('./feedbackRouter');

router.use('/organization', organizationRouter);
router.use('/service', serviceRouter);
router.use('/type', typeRouter);
router.use('/feedback', feedbackRouter);

module.exports = router;
