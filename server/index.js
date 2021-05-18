const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(
	"sk_test_51Is8NSSJt0CbONA4w38hWPvqJPZOU8FpEpE2Dx3TRojx3ZvemdlsImkN45PvieibKlqmgrd3tbYZIS1Zgs0Tl3A000smrtkchw"
);
const uuid = require("uuid");
const dotenv = require("dotenv");
const cookies = require("cookie-parser");
const mongoose = require("mongoose");
const app = express();

//making passwords secure using .env
dotenv.config({ path: "./.env" });

//middlewares
app.use(express.json());
app.use(cors());

//connect to db
require("./db/connect.js");

//importig outsourced routes
app.use(require("./router/auth.js"));

//server listening on port 3000
PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});
