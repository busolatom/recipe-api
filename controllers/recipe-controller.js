import { RecipeModel } from "../models/recipe-model.js";

// Get all recipes
export const getRecipes = async (req, res, next) => {
  try {
    // Get query params- the structuring
    const { limit, skip, filter } = req.query;
    // Get all recipes from database
    const allRecipes = await RecipeModel
      .find(filter)
      .limit(limit)
      .skip(skip);
    // Return all recipes as response
    // res.json(`Here is your requested recipe, ${allRecipes}`);
    res.json(allRecipes);
  } catch (error) {
    next(error);
  }
}

//  Get recipe by Id
export const getRecipe = async (req, res, next) => {
  try {
    const oneRecipe = await RecipeModel.findById(req.params.id);
    //  return response
    res.status(200).json(oneRecipe);
  } catch (error) {
    next(error);
  }
}

//  Post recipe
export const postRecipe = async (req, res, next) => {
  try {
    // Add recipe to database
    await RecipeModel.create({
      ...req.body,
      image: req.file.filename
    });
    // Return response
    // res.json('Fufu and Light Soup Recipe added');
    res.json(`${req.body.name} recipe added`);
  } catch (error) {
    next(error);
  }
}

//   Update recipe
export const updateRecipe = async (req, res, next) => {
  try {
    // do an update
    const newUpdate = req.body;
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, newUpdate, { new: true });
    // Return response
    res.status(200).json(updatedRecipe);
  } catch (error) {
    next(error);
  }
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




