import { validationResult } from "express-validator";
import apiData from "../helpers/api.helper.js";

const  validateResult = async (req, res, next)=>{
    const da = await apiData;
    const map = new Map(Object.entries(da));
    const values = Array.from(map.values());
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        res.status(403);
        console.log()
        res.render('index',{errors: error.array(), data: values}); 
    }
}

export default validateResult;