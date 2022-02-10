const Router = require('express');
const router = new Router();
const organizationRouter = require('./organizationRouter');
const serviceRouter = require('./serviceRouter');
const typeRouter = require('./typeRouter');

router.use('/organization', organizationRouter);
router.use('/service', serviceRouter);
router.use('/type', typeRouter);

module.exports = router;
