import mongoose, {Schema} from "mongoose";
import LikeI from "../../models/likes/LikeI";

/**
 * @typedef Like represents the likes in the tuiter application
 * @property {Object} tuit The tuit that was liked
 * @property {Object} likedBy The user who liked the tuit
 */
const LikesSchema = new mongoose.Schema({
    tuit: {type: Schema.Types.ObjectId,
        ref: "TuitModel"},
    likedBy: {type: Schema.Types.ObjectId,
        ref: "UserModel"},
}, {collection: "likes"});
export default LikesSchema;