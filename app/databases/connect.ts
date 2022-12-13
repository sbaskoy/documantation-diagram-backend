import Mongoose from "mongoose";

const db = Mongoose.connection;

db.once("open", () => {
    console.log("db connection success");
});
export const connectDatabase = async () => {
    console.log("Db Host -> ", process.env.DB_HOST)
    await Mongoose.connect(process.env.DB_HOST || `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_DATABASE_NAME}`);
}
