const express = require("express");
const app = express();
const routes = require("./routes/route");
const logger = require("./middleware/logger");

app.use(logger); // Logs every request
app.use("/", routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
