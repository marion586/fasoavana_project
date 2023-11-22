//import
import express from "express";
import mongoose from "mongoose";
import auth from "./src/routes/autRoutes/index.js";
import material from "./src/routes/material/material.js";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();

//expreess function
const app = express();

//connect to mongoDB database

//middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/auth", auth);

app.use("/material", material);

const PORT = process.env.PORT || 3002;
console.log("uri", process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(
        `Server Port: ${PORT} and dabase url ${process.env.MONGO_URL}`
      )
    );
    //Add Data One time
    // User.insertMany(users);
    // Post.insertMany(posts)
  })
  .catch((error) => console.log(`${error}  did not connect`));