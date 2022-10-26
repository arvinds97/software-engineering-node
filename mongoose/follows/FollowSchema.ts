import mongoose, {Schema} from "mongoose";
import FollowI from "../../models/follows/FollowI";

const FollowSchema = new mongoose.Schema<FollowI>(
    {
        userFollowed: {type: Schema.Types.ObjectId, ref: "UserModel"},
        userFollowing: {type: Schema.Types.ObjectId, ref: "UserModel"}
    },
    {
        collection: "follows"
    }
);
export default FollowSchema;