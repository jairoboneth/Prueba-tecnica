import { Router } from "express";
import homeController from "../controllers/home.controller.js";
import validateCreate from "../validators/contact.validator.js";
const router =  Router();

router.get('/',homeController.get);
router.post('/contact/add',validateCreate, homeController.post);


export default router;