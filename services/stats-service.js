const ky = require("ky-universal");

const kyInstance = ky.extend({
  prefixUrl: "https://covidapi.info/api/v1",
});

class StatsService {
  static async getStatsByCountry(countryCode = "MEX", date = "2020-03-29") {
    try {
      return await kyInstance.get(`country/${countryCode}/${date}`).json();
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = StatsService;
