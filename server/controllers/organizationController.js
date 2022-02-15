const ApiError = require('../handlers/apiError');
const { Organization, OrganizationInfo, Service } = require('../models/index');

class OrganizationController {
  async create(req, res, next) {
    try {
      const { name, addres, phone, info } = req.body;
      const createdOrganization = await Organization.create({
        name,
        addres,
        phone,
      });
      if (info) {
        OrganizationInfo.create({
          organizationId: createdOrganization.id,
          infoId: createdOrganization.id,
          fullName: info.fullName,
          description: info.description,
          route: info.route,
          schedule: info.schedule,
          supervisor: info.supervisor,
          email: info.email,
          registration: info.registration,
        });
      }

      return res.json(createdOrganization);
    } catch (err) {
      return next(ApiError.badRequest(err));
    }
  }

  async getAll(req, res) {
    let { limit, page } = req.query;
    limit = limit || 9;
    page = page || 1;
    let offset = limit * page - limit,
      listOrganization;
    if (limit > 0)
      listOrganization = await Organization.findAndCountAll({
        limit,
        offset,
      });
    else listOrganization = await Organization.findAndCountAll();
    return res.json(listOrganization);
  }

  async getOne(req, res, next) {
    const { id } = req.params;
    if (!id) {
      return next(ApiError.badRequest('не передан параметр id'));
    }
    const currOrganization = await Organization.findOne({
      where: { id },
      include: [
        { model: OrganizationInfo, as: 'info' },
        { model: Service, attributes: ['id', 'name'] },
      ],
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
      const currOrganizationInfo = await OrganizationInfo.destroy({
        where: { organizationId: id },
      });
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
        { name, addres, phone },
        { where: { id } }
      );

      const selectedOrganization = await Organization.findOne({
        where: { id },
      });

      //TO DO: add apload to organizationInfo

      return res.json(selectedOrganization);
    } catch (err) {
      return next(ApiError.badRequest(err));
    }
  }
}

module.exports = new OrganizationController();
