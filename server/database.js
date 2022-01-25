const mongoose = require("mongoose");

dbConnect();

async function dbConnect() {
  try {
    mongoose.connect(
      "mongodb+srv://namngo2810:95Q0hOXY1cOYdBXP@cluster0.imv3m.mongodb.net/EWork",
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log("MongoDB connection success");
      }
    );
  } catch (error) {
    console.log(error);
  }
}
