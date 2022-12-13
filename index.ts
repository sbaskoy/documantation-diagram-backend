
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import dotenv from 'dotenv';
import { connectDatabase } from './app/databases/connect';
import { errorHandler } from './app/middleware';
import module_route from './app/routers/modele_route';

dotenv.config();

connectDatabase();


var app = express();

var corsOptions = {
    origin: '*',
}
app.use(cors(corsOptions));
app.use(express.json());
const methods = fs.readdirSync("./public/md/methods");
const components = fs.readdirSync("./public/md/components");
const modules = fs.readdirSync("./public/md/modules");
const interfaces = fs.readdirSync("./public/md/interfaces");
const enums = fs.readdirSync("./public/md/enums");
const types = fs.readdirSync("./public/md/types");
const services = fs.readdirSync("./public/md/services");


const menuItems = [
    {
        path: "modules",
        name: "Modules",
        files: modules
    },
    {
        path: "components",
        name: "Components",
        files: components
    },
    {
        name: "Methods",
        path: "methods",
        files: methods
    },
    {
        name: "Interface",
        path: "interfaces",
        files: interfaces
    },
    {
        name: "Enum",
        path: "enums",
        files: enums
    },
    {
        name: "Types",
        path: "types",
        files: types
    },
    {
        name: "Types",
        path: "types",
        files: types
    },
    {
        name: "Services",
        path: "services",
        files: services
    },

]



app.get('/', function (req, res) {
    menuItems.forEach(menuItem => {
        menuItem.files.forEach(fileName => {
            app.get(`/${menuItem.path}/${fileName}`, (req, res) => {
                const data = fs.readFileSync(`./public/md/${menuItem.path}/${fileName}`, 'utf8');
                res.json({
                    data,
                    title: fileName
                })
            })
        })
    })

    const data = fs.readFileSync(`./public/md/home.md`, 'utf8');
    res.json({
        title: "Home",
        menuItems,
        data
    });
});




app.listen(1882, () => {
    app.use("/module", module_route)
    app.use(errorHandler);
    console.log(`app running port ${1882}`)
})
console.log('Server is listening on port 8080');