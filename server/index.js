const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI,
    {
   useNewUrlParser: true,
   useUnifiedTopology: true,

 }
).then(() => {
 console.log("MongoDB is connected");
}).catch((error) => {
 console.error("MongoDB connection error: ", error);
});

app.listen(port, (req, res) => {
    console.log(`server running on port  ${port}`)
})