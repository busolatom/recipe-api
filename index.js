import express from "express";
import recipeRouter from "./routes/recipe-routes.js";
import mongoose from "mongoose";

// Connect to database
await mongoose.connect(process.env.Mongo_url);

// Create Express App
const recipeapp = express();

// Apply middlewares-application middleware unwraps data posted from the frontend
recipeapp.use(express.json());

// Use routes- enable us make use of other routes defined in other files
recipeapp.use(recipeRouter);

// Listen for incoming requests
recipeapp.listen(3000, () => {
    console.log('App listening on port 3000');
});


// user password
//  0oyaUgeseJzdWcXg

