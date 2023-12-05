import express, { json } from "express";
import cors from 'cors';
import { connect } from "mongoose";
import { config } from "dotenv";
import userRoute from "./Routes/userRoutes.js";

const app = express();
config();
app.use(json());
app.use(cors());

app.use("/api/user", userRoute);

const port = process.env.PORT || 3000;
connect(process.env.MONGO_URI,
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