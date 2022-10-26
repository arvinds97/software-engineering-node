import BookmarkI from "../models/bookmarks/BookmarkI";
import BookmarkDaoI from "../interfaces/BookmarkDao";
import Bookmark from "../models/bookmarks/Bookmark";
import BookmarkModel from "../mongoose/bookmarks/BookmarkModel";
import LikeModel from "../mongoose/likes/LikeModel";

export default class BookmarkDao implements BookmarkDaoI {
    private static bookmarkDao: BookmarkDao | null = null;
    public static getInstance = () : BookmarkDao => {
        if (BookmarkDao.bookmarkDao === null) {
            BookmarkDao.bookmarkDao = new BookmarkDao();
        }
        return BookmarkDao.bookmarkDao;
    }
    private constructor() {
    }
    findAllUsersThatBookmarkedTuit = async (tid: string): Promise<BookmarkI[]> =>
        await BookmarkModel
            .find({tuit: tid})
            .populate("bookmarkedBy")
            .exec();

    findAllTuitsBookmarkedByUser = async (uid: string): Promise<BookmarkI[]> =>
        await BookmarkModel
            .find({bookmarkedBy: uid})
            .populate("tuit")
            .exec();
    userBookmarksTuit = async (uid: string, tid: string): Promise<any> =>
        await BookmarkModel.create({tuit : tid, bookmarkedBy: uid});

    userUnBookmarksTuit = async (uid: string, tid: string): Promise<any> =>
        await LikeModel.deleteOne({tuit: tid, bookmarkedBy: uid});

}

