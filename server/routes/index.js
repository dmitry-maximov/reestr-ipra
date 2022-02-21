const Router = require('express');
const router = new Router();
const organizationRouter = require('./organizationRouter');
const serviceRouter = require('./serviceRouter');
const typeRouter = require('./typeRouter');
const authRouter = require('./userRouter');

router.use('/organization', organizationRouter);
router.use('/service', serviceRouter);
router.use('/type', typeRouter);
router.use('/auth', authRouter);

module.exports = router;
