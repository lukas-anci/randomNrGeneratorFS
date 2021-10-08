require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongo db connected');
  } catch (error) {
    console.error('Monog db fail');
    console.log(error);
  }
};
module.exports = connectDB;
