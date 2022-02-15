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
    let listServices = await Type.findAndCountAll();
    return res.json(listServices);
  }

  async delete(req, res, next) {
    //TO DO:
  }

  async update(req, res, next) {
    //TO DO:
  }
}

module.exports = new TypeController();
