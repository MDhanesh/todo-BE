const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./connect");

const Todorouter = require("./Router/TodoRouter");

dotenv.config();
db();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/", Todorouter);

//PORT
app.listen(process.env.PORT || 5000);
