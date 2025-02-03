import mongoose from "mongoose";


 export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName:"JOB_SEEKER"
    }).then(() => {
        console.log("DB is connected")
    }).catch((err) => {
        console.log(`Some error occured while connecting to database:${err}`);
    })
}