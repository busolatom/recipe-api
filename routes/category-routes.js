import { Router } from "express";
import { localUpload } from "../middleware/upload.js";
import { getCategories, postCategory } from "../controllers/category-controller.js";

// Create upload middleware- upload middleware is not implemented with app.use, you use it only on the endpoint that needs it
// const upload = multer({dest: 'uploads'});

// Create router
const categoryRouter = Router();

// Define routes
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', localUpload.single('image'), postCategory);

// Export router
export default categoryRouter;