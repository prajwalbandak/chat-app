import express, { json } from "express";
import cors from 'cors';
import { connect } from "mongoose";
import { config } from "dotenv";
import userRoute from "./Routes/userRoutes.js";
import chatRoute from "./Routes/chatRoutes.js"
import messageRoute from "./Routes/messageRoute.js";
const app = express();
config();
app.use(json());
app.use(cors());

app.use("/api/user", userRoute);
app.use("/api/chat", chatRoute);
app.use("/api/messages", messageRoute);

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