const ApiError = require('../handlers/apiError');
const { Organization, OrganizationInfo } = require('../models/index');

class OrganizationController {
  async create(req, res) {
    try {
      const { name, info } = req.body;
      const createdOrganization = await Organization.create({ name });

      // if (info) {
      //   info = JSON.parse(info);
      //   info.forEach((i) =>
      //     OrganizationInfo.create({
      //       full_name: i.full_name,
      //       phone: i.phone,
      //       organizationId: createdOrganization.id,
      //     })
      //   );
      // }

      return res.json(createdOrganization);
    } catch (err) {
      return next(ApiError.badRequest(err));
    }
  }

  async getAll(req, res) {
    const listOrganization = await Organization.findAndCountAll();
    return res.json(listOrganization);
  }

  async getOne(req, res, next) {
    const { id } = req.params;
    if (!id) {
      return next(ApiError.badRequest('не передан параметр id'));
    }
    const currOrganization = await Organization.findOne({
      where: { id },
      // include: [{ model: OrganizationInfo, as: 'info' }],
    });
    if (!currOrganization) {
      return next(ApiError.internalServer('организация не найдена'));
    }
    return res.json(currOrganization);
  }

  async delete(req, res) {
    const { id } = req.params;
    if (!id) {
      return next(ApiError.badRequest('не передан параметр id'));
    }
    try {
      const currOrganization = await Organization.destroy({ where: { id } });
      return res.json(currOrganization);
    } catch (err) {
      return next(ApiError.badRequest(err));
    }
  }

  async update(req, res) {
    const { id } = req.params;

    if (!id) {
      return next(ApiError.badRequest('не передан параметр id'));
    }

    const currOrganization = await Organization.findOne({ where: { id } });
    if (!currOrganization) {
      return next(ApiError.internalServer('организация не найдена'));
    }

    const { name } = req.body;
    try {
      const upOrganization = await Organization.update(
        { name },
        { where: { id } }
      );

      const selectedOrganization = await Organization.findOne({
        where: { id },
      });

      return res.json(selectedOrganization);
    } catch (err) {
      return next(ApiError.badRequest(err));
    }
  }
}

module.exports = new OrganizationController();
