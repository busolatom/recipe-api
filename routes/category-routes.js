import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category-routes.js";

// Create router
const categoryRouter = Router();

// Define routes
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', postCategory);

// Export router
export default categoryRouter;