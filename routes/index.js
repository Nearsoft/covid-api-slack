const StatsService = require("../services/stats-service");
const SlackService = require("../services/slack-service");

const { format, add } = require("date-fns");

const { DATE_FORMAT } = require("../utils/constants");

const IndexController = {
  Router: function (router, route) {
    router.post(`${route}`, this.index);

    return router;
  },

  index: async (req, res) => {
    try {
      const date = new Date();
      const today = format(add(date, { days: -1 }), DATE_FORMAT);
      const response = await StatsService.getStatsByCountry("MEX", today);

      const { count, result } = response;

      await SlackService.sendSlackData({ result });

      res.status(200).end();
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  },
};

module.exports = IndexController;
