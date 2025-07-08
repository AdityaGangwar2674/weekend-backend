const express = require("express");
function identifyLongWeekends(holidays, year) {
  const holidayDates = new Set(holidays.map((h) => h.date));
  const result = [];

  const start = new Date(`${year}-01-01`);
  const end = new Date(`${year}-12-31`);

  let d = new Date(start);

  while (d <= end) {
    if (isWeekend(d) || holidayDates.has(toISO(d))) {
      const stretch = [];
      let temp = new Date(d);

      while (
        temp <= end &&
        (isWeekend(temp) || holidayDates.has(toISO(temp)))
      ) {
        stretch.push(toISO(temp));
        temp.setDate(temp.getDate() + 1);
      }

      if (stretch.length >= 3) {
        result.push({
          start_date: stretch[0],
          end_date: stretch[stretch.length - 1],
          length_days: stretch.length,
        });
      }

      d = temp;
    } else {
      d.setDate(d.getDate() + 1);
    }
  }

  return result;
}

function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday(0), Saturday(6)
}

function toISO(date) {
  return date.toISOString().split("T")[0];
}
module.exports = { identifyLongWeekends };
