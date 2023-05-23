// Import Config
import config from "config";
const PORT = config.get<number>("port");
// Import Express
import express from "express";
const app = express();
app.use(express.json());
// Import Data Base
import connectToMongo from "./db/conn";
connectToMongo();

// Routes
import routes from "./router";
app.use("/api", routes);

app.listen(PORT, async () => {
  console.log(`App rondando na porta: ${PORT}`);
});
