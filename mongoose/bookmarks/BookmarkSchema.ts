import mongoose, {Schema} from "mongoose";
import LikeI from "../../models/bookmarks/BookmarkI";
import BookmarkI from "../../models/bookmarks/BookmarkI";

const BookmarkSchema = new mongoose.Schema<BookmarkI>({
    tuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    bookmarkedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "bookmarks"});
export default BookmarkSchema;