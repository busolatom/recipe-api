import { CategoryModel } from "../models/category.js";

// Fetch from database with and without conditions and with pagination
export const getCategories = async (req, res, next) => {
    try {
        // Get query params- the structuring
        const { limit = 10, skip = 0, filter = "{}", fields = "{}" } = req.query;
        // Get all categories from database
        const allCategories = await CategoryModel
            .find(JSON.parse(filter))
            .select(JSON.parse(fields))
            .limit(limit)
            .skip(skip);
        // Return response
        res.status(200).json(allCategories);
    } catch (error) {
        next(error);
    }
}


export const postCategory = async (req, res, next) => {
    try {
        // Add category to database
        const newCategory = await CategoryModel.create({
            ...req.body,
            image: req.file.filename
        });
        // Return response
        res.status(201).json(newCategory);
    } catch (error) {
        next(error);
    }
}