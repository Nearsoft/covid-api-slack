const ky = require("ky-universal");
const { format, add } = require("date-fns");

const generateMessage = require("../utils/generate-message");

const { DATE_FORMAT } = require("../utils/constants");

const kyInstance = ky.extend({
  prefixUrl: "https://hooks.slack.com/services",
  headers: {
    "Content-Type": "application/json",
  },
});

class SlackService {
  static async sendSlackData({ result }) {
    const date = new Date();
    const today = format(add(date, { days: -1 }), DATE_FORMAT);
    const message = generateMessage(result[today]);

    try {
      // TODO: This tokens shouldn't be exposed here
      return await kyInstance.post(
        "T02CND36A/B010SPB5541/B3B4HRwoSEcdvlhoHZ7oBVvu",
        {
          json: message,
        }
      );
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = SlackService;
