const express = require('express');
const mongoose = require('mongoose');
const UserContactDetails = require('./models/UserContactDetails');

const mongoPath = 'mongodb+srv://yfedchenko1:1vkRECf0kL5mnctC@form.bjjva.mongodb.net/?retryWrites=true&w=majority';

const app = express();
const cors = require("cors");

require("dotenv").config()

mongoose.connect(mongoPath, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;
dbConnection.on('open', () => {
  console.log('DB connected');
});

app.use(express.json());
app.use(cors());

app.post('/api/contact-form', async (req, res) => {
  try {
    const newUserContactDetails = new UserContactDetails({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    const result = await newUserContactDetails.save();
    res.json(result);
  } catch (error) {
    res.send('Error ' + err);
  }
});

app.get('/api/contact-form', async (req, res) => {
  try {
    const contactDetails = await UserContactDetails.find();
    res.json(contactDetails);
  } catch (error) {
    res.send('Error ' + err);
  }
});

const port = 5000;
app.listen(process.env.PORT || 5000, () => console.log('Server running...'));
