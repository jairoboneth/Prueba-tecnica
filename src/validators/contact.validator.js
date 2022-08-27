import { check, body } from "express-validator";
import validateResult from "../helpers/validator.helper.js";
const validateCreate = [
  check("name", 'ingrese un nombre valido').exists().not().isEmpty().withMessage('es requerido').isString().isAlpha().withMessage('Solo debe tener letras').trim(),
  check("Apellido", 'Ingrese un Apellido valido').exists().not().isEmpty().isString().isAlpha().trim(),
  check("pais", 'Ingrese un Apellido valido').not().isEmpty(),
  check("celular", 'Ingrese un celular valido').exists().not().isEmpty().isNumeric().isLength({ max: 11, min:10}),
  check("email", 'Ingrese un correo valido').exists().isEmail().normalizeEmail(),
  (req,res, next)=>{
    validateResult(req, res, next)
  }
];

export default validateCreate;
