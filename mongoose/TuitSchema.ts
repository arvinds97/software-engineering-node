import mongoose from "mongoose";
const TuitSchema = new mongoose.Schema({
    tuit: {type: String, required: true},
    postedOn: {type: Date, required: true},
    postedBy: {type: String, required: true},
}, {collection: 'tuits'});
export default TuitSchema;