const ApiError = require('../handlers/apiError');
const { Feedback } = require('../models/index');

class FeedbackController {
  async create(req, res, next) {
    try {
      const { name, email, theme, body } = req.body;
      const createdFeedback = await Feedback.create({
        name,
        email,
        theme,
        body,
      });
      return res.json(createdFeedback);
    } catch (err) {
      return next(ApiError.badRequest(err));
    }
  }

  async getAll(req, res, next) {
    const listFeedback = await Feedback.findAll();
    return res.json(listFeedback);
  }

  async delete(req, res) {
    const { id } = req.params;
    if (!id) {
      return next(ApiError.badRequest('не передан параметр id'));
    }
    try {
      const removeFeedback = await Feedback.destroy({ where: { id } });
      return res.json(removeFeedback);
    } catch (err) {
      return next(ApiError.badRequest(err));
    }
  }
}

module.exports = new FeedbackController();
