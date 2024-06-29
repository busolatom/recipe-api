import { Router } from "express";
// import { RecipeModel } from "../models/recipe-model.js";
import { deleteRecipe, getRecipe, getRecipes, postRecipe, updateFavourite, updateRecipe } from "../controllers/recipe-controller.js";

// Create router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', postRecipe);

recipeRouter.patch('/recipes/:id', updateRecipe);

recipeRouter.patch('/recipesfav/:id', updateFavourite);

recipeRouter.delete('/recipes/:id', deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe);

// Export router
export default recipeRouter;
