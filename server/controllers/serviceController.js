const ApiError = require('../handlers/apiError');
const { Service, Organization } = require('../models/index');

class ServiceController {
  async create(req, res, next) {
    try {
      const { name, description, typeId } = req.body;
      const createdServices = await Service.create({
        name,
        description,
        typeId,
      });
      return res.json(createdServices);
    } catch (err) {
      return next(ApiError.badRequest(err));
    }
  }

  async getAll(req, res) {
    let { limit, typeId } = req.query;
    let listServices;

    if (typeId && limit && limit > 0)
      listServices = await Service.findAndCountAll({
        where: { typeId },
        limit,
      });
    else listServices = await Service.findAndCountAll();
    return res.json(listServices);
  }

  async getOne(req, res, next) {
    const { id } = req.params;
    if (!id) {
      return next(ApiError.badRequest('не передан параметр id'));
    }
    const currService = await Service.findOne({
      where: { id },
      include: [{ model: Organization, attributes: ['id', 'name'] }],
    });
    if (!currService) {
      return next(ApiError.internalServer('услуга не найдена'));
    }
    return res.json(currService);
  }

  async delete(req, res, next) {
    //TO DO:
  }

  async update(req, res, next) {
    //TO DO:
  }
}

module.exports = new ServiceController();
