const Router = require('express');
const organizationController = require('../controllers/organizationController');
const router = new Router();

router.post('/', organizationController.create);
router.get('/', organizationController.getAll);
router.get('/:id', organizationController.getOne);
router.put('/:id', organizationController.update);
router.delete('/:id', organizationController.delete);

module.exports = router;
