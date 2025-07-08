const axios = require("axios");
const { identifyLongWeekends } = require("../utils/longweekend.utils");

const BASE_URL = "https://date.nager.at/api/v3/PublicHolidays";

async function getLongWeekends(countryCode) {
  const year = new Date().getFullYear();
  const url = `${BASE_URL}/${year}/${countryCode}`;

  try {
    const { data: holidays } = await axios.get(url);
    return identifyLongWeekends(holidays, year);
  } catch (err) {
    throw new Error("Failed to fetch holidays: " + err.message);
  }
}

async function getNextLongWeekend(countryCode) {
  const year = new Date().getFullYear();
  const url = `${BASE_URL}/${year}/${countryCode}`;
  const { data } = await axios.get(url);
  const weekends = identifyLongWeekends(data, year);
  const today = new Date();

  const next = weekends.find((w) => new Date(w.start_date) >= today);
  return next || { message: "No more long weekends this year." };
}

module.exports = {
  getLongWeekends,
  getNextLongWeekend,
};
