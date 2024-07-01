import express from "express";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator";
import recipeRouter from "./routes/recipe-routes.js";
import categoryRouter from "./routes/category-routes.js";


// Connect to database
await mongoose.connect(process.env.Mongo_url);
console.log ("Database connected");

// Create Express App
const recipeapp = express();
expressOasGenerator.handleResponses(recipeapp, {
    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
});

// Apply middlewares-application middleware unwraps data posted from the frontend
recipeapp.use(express.json());

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


