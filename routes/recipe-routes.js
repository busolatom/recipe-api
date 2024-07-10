import { Router } from "express";
// import { RecipeModel } from "../models/recipe-model.js";
import { remoteUpload } from "../middleware/upload.js";
import { deleteRecipe, getRecipe, getRecipes, postRecipe, updateRecipe } from "../controllers/recipe-controller.js";
import { checkUserSession } from "../middleware/auth.js";

// Create router
const recipeRouter = Router();


// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', checkUserSession, remoteUpload.single('image'), postRecipe);

recipeRouter.patch('/recipes/:id', checkUserSession, updateRecipe);

recipeRouter.delete('/recipes/:id', checkUserSession, deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe);

// Export router
export default recipeRouter;
