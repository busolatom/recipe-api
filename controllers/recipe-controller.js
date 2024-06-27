import { RecipeModel } from "../models/recipe-model.js";

// Get all recipes
export const getRecipes = async (req, res, next) => {
    try {
      // Get all recipes from database
      const allRecipes = await RecipeModel.find();
      // Return all recipes as response
      // res.json(`Here is your requested recipe, ${allRecipes}`);
      res.json(allRecipes);
    } catch (error) {
         next(error);
    }
 }

//  Post recipe
 export const postRecipe = async (req, res, next) => {
    try {
        // Add recipe to database
        await RecipeModel.create(req.body);
        // Return response
        // res.json('Fufu and Light Soup Recipe added');
        res.json(`${req.body.name} recipe added`);
    } catch (error) {
          next(error);
    }
  }

//   Update recipe
export const updateRecipe = (req, res) => {
    res.json(`Recipe with id ${req.params.id} updated`);
}

// Delete recipe
export const deleteRecipe = async (req, res, next) => {
   try {
    // delete recipe by id
    const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
    // return response
     res.json(`${req.body.name} recipe with id ${req.params.id} deleted`);
   } catch (error) {
    next(error)
   }
}

// Get recipe by Id
export const getRecipe = (req, res) => {
    res.json(`Recipe with id ${req.params.id} provided`);
}