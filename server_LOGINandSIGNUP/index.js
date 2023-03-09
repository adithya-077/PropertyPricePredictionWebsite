const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const   dotenv = require('dotenv');
const authRouter = require("./routes/auth");
dotenv.config()

const PORT = process.env.PORT || 7000;
const app = express();
app.use(cors());

app.use(express.json());
app.use(authRouter);

const DB = process.env.MONGO_URL

mongoose.connect(DB).then(() => console.log("CONNECTED TO DB"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`CONNECTED IN ${PORT}`);
});
