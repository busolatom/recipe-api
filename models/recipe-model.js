import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
    name: {type: String, required: true, unique: true},
    ingredients: [{type:String}]
});

export const RecipeModel = model('Recipe', recipeSchema);
