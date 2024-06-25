import { Router } from "express";

// Create router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', (req, res) => {
    res.json('All recipes');
});

recipeRouter.post('/recipes', (req, res) => {
    res.json('Recipe added');
});

recipeRouter.patch('/recipes/:id', (req, res) => {
    res.json(`Recipe with id ${req.params.id} updated`);
});

recipeRouter.delete('/recipes/:id', (req, res) => {
    res.json(`Recipe with id ${req.params.id} deleted`);
});


// Export router
export default recipeRouter;
