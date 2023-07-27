require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./db/connect");
const Contact = require("./model/contact");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is live!!");
});

// Post here
// to add data in database
app.post("/", async (req, res) => {
  const data = req.body;
  await Contact.insertMany([data]);
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} is onnnnn!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
