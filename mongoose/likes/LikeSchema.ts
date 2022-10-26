import mongoose, {Schema} from "mongoose";
import LikeI from "../../models/likes/LikeI";

const LikeSchema = new mongoose.Schema<LikeI>({
    tuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    likedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "likes"});
export default LikeSchema;