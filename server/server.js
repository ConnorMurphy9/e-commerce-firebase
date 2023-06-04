const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.send("Hello World!")
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

app.post("/pay", async(req, res) => {
    console.log(req.body.token);
    await Stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "usd",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
});