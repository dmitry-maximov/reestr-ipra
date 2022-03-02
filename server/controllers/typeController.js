const ApiError = require('../handlers/apiError');
const { Type } = require('../models/index');

class TypeController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const created = await Type.create({
        name,
      });
      return res.json(created);
    } catch (err) {
      return next(ApiError.badRequest(err));
    }
  }

  async getAll(req, res) {
    let listTypes = await Type.findAll();
    return res.json(listTypes);
  }

  async delete(req, res) {
    const { id } = req.params;
    if (!id) {
      return next(ApiError.badRequest('не передан параметр id'));
    }
    try {
      const removeItem = await Type.destroy({ where: { id } });
      return res.json(removeItem);
    } catch (err) {
      return next(ApiError.badRequest(err));
    }
  }
}

module.exports = new TypeController();
