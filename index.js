import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import expressOasGenerator from "express-oas-generator";
import recipeRouter from "./routes/recipe-routes.js";
import categoryRouter from "./routes/category-routes.js";

// Connect to database
await mongoose.connect(process.env.Mongo_url);
console.log ("Database connected");

// Create Express App
const recipeapp = express();
expressOasGenerator.handleResponses(recipeapp, {
    alwaysServeDocs: true,
    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
});

// Apply middlewares-application middleware express.json() unwraps data posted from the frontend
// cors middleware to allow frontend access to use the api 
recipeapp.use(cors()); 
recipeapp.use(express.json());
// Helps generate url to access static images hosted locally in your api, name in quote is your image file folder name
recipeapp.use(express.static('uploads'));

// Use routes- enable us make use of other routes defined in other files
recipeapp.use(recipeRouter);
recipeapp.use(categoryRouter);
expressOasGenerator.handleRequests();
recipeapp.use((req, res) => res.redirect('/api-docs/'));

// Listen for incoming requests
const port = process.env.PORT || 3000;
recipeapp.listen(port, () => {
    console.log(`App listening on port ${port}`);
});


