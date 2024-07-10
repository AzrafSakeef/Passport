require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONG_URL)
.then(() =>{
    console.log("DB is connected");
})
.catch((error) => {
    console.log(error.message);
});