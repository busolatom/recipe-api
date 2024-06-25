import express from "express";
import recipeRouter from "./routes/recipes.js";

// Create Express App
const app = express();

// Use routes- enable us make use of other routes defined in other files
app.use(recipeRouter);

// Listen for incoming requests
app.listen(3000, () => {
    console.log('App listening on port 3000');
});
