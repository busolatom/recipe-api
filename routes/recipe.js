import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";

// Create router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', (req, res) => {
    res.json('All recipes');
});

recipeRouter.post('/recipes', async (req, res) => {
    // Add recipe to database
    await RecipeModel.create(req.body);
    // Return response
    res.json('Fufu and Light Soup Recipe added');
});

recipeRouter.patch('/recipes/:id', (req, res) => {
    res.json(`Recipe with id ${req.params.id} updated`);
});

recipeRouter.delete('/recipes/:id', (req, res) => {
    res.json(`Recipe with id ${req.params.id} deleted`);
});

recipeRouter.get('/recipes/:id', (req, res) => {
    res.json(`Recipe with id ${req.params.id} provided`);
});
// Export router
export default recipeRouter;
