const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
require("dotenv").config();
const PORT = 3005
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.post("/pay", async(req, res) => {
    console.log(req.body.token);
    await Stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "usd",
    });
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on Port ${PORT}`)
});