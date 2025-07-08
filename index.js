const express = require("express");
const weekendsRouter = require("./routes/weekends.route");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", weekendsRouter);

app.get("/", (req, res) => {
  res.send("🌴 Long Weekend API is running");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
