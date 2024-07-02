import { CategoryModel } from "../models/category.js";

// export const getCategories = async (req, res, next) => {
    // try {
        // Get query params- the structuring
        // const { limit, skip, filter, fields } = req.query;
        // Get all categories from database
        // const allCategories = await CategoryModel
            // .find(JSON.parse(filter))
            // .select(JSON.parse(fields))
            // .limit(limit)
            // .skip(skip);
        // Return response
        // res.status(200).json(allCategories);
    // } catch (error) {
        // next(error);
    // }
// }


export const getCategories = async (req, res, next) => {
    try {
        let query = {}; // Initialize an empty query object

        // Get query params - the structuring
        const { limit, skip, filter, fields } = req.query;

        // Parse filter and fields if they exist
        if (filter) {
            Object.assign(query, JSON.parse(filter));
        }

        // Query database based on conditions
        let queryBuilder = CategoryModel.find(query);

        if (fields) {
            queryBuilder = queryBuilder.select(JSON.parse(fields));
        }
        if (limit) {
            queryBuilder = queryBuilder.limit(parseInt(limit, 10));
        }
        if (skip) {
            queryBuilder = queryBuilder.skip(parseInt(skip, 10));
        }

        // Execute the query
        const allCategories = await queryBuilder.exec();

        // Return response
        res.status(200).json(allCategories);
    } catch (error) {
        next(error);
    }
};


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