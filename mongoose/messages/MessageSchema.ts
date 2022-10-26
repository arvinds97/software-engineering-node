import MessageI from "../../models/messages/MessageI";
import mongoose, {Schema} from "mongoose";

const MessageSchema = new mongoose.Schema<MessageI>(
    {
        message:  {type: "string"},
        to: {type: Schema.Types.ObjectId, ref: "UserModel"},
        from: {type: Schema.Types.ObjectId, ref: "UserModel"},
        sentOn: {type: "date"}
    }, {
        collection: "messages"
    }
);

export default MessageSchema;