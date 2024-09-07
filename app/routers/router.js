import {Router} from "express";
const router = Router();
import { catchErrors } from "../middlewares/catchErrors.js";
import {indexController} from "../controllers/indexController.js";

router.get("/", catchErrors(indexController.index));

// ! Si je ne veux pas utiliser les accolades '{}', l'export n'est pas nommé, donc je dois utiliser 'export default router;' dans ce cas je peut le renommer a l'import, en utilisant la syntaxe avec les '{}' j'exporte en nommant et je dois importer en nommant egalement avec les '{}'

export {router};