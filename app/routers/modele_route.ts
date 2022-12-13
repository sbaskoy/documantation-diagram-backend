
import express from "express";
import { addNewModule, addSubItem, deleteItem, listAllModule, update, moveItems } from "../controllers/module_controller";
import { mongoDbIdChecker } from "../middleware/index";
import { validate } from "../middleware/validate";
import { newModuleValidation, updateModuleValidation } from "../validations/module_validations";
import { moveValidation } from './../validations/module_validations';


const module_route = express.Router();


module_route.get("/", listAllModule);
module_route.get("/:id", listAllModule);
module_route.post("/", validate(newModuleValidation), addNewModule);

module_route.post("/:id/update", mongoDbIdChecker(), validate(updateModuleValidation), update);
module_route.post("/:id/add-sub-item", mongoDbIdChecker(), validate(newModuleValidation), addSubItem);
module_route.post("/move", validate(moveValidation), moveItems);


module_route.delete("/:id/delete", mongoDbIdChecker(), deleteItem);




export default module_route;