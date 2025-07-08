const express = require("express");
const {
  getLongWeekends,
  getNextLongWeekend,
} = require("../services/holidayService.service");

const router = express.Router();

router.get("/long-weekends/:countryCode", async (req, res) => {
  try {
    const weekends = await getLongWeekends(req.params.countryCode);
    res.json(weekends);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/next-long-weekend/:countryCode", async (req, res) => {
  try {
    const weekend = await getNextLongWeekend(req.params.countryCode);
    res.json(weekend);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
