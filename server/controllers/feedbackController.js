const ApiError = require('../handlers/apiError');
const { Feedback } = require('../models/index');

class FeedbackController {
  async create(req, res, next) {
    debugger;
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
}

module.exports = new FeedbackController();
