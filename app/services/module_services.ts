
import Module, { IModule } from "../models/Module";
import BaseService from "./base_services";



class ModuleService extends BaseService<IModule> {
    constructor() {
        super(Module)
    }
}
export default new ModuleService();