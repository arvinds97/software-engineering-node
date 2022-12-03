/**
 * @file Implements DAO managing data storage of dislikes. Uses mongoose DislikeModel
 * to integrate with MongoDB
 */
import DislikeDaoI from "../interfaces/DislikeDaoI";
import DislikeModel from "../mongoose/dislikes/DislikeModel";
import Dislike from "../models/dislikes/Dislike";

/**
 * @class DislikeDao Implements Data Access Object managing data storage
 * of Bookmarks
 * @property {DislikeDao} dislikeDao Private single instance of DislikeDao
 */
export default class DislikeDao implements DislikeDaoI {
    private static dislikeDao: DislikeDao | null = null;

    /**
     * Creates singleton DAO instance
     * @returns DislikeDao
     */
    public static getInstance = (): DislikeDao => {
        if (DislikeDao.dislikeDao === null) {
            DislikeDao.dislikeDao = new DislikeDao();
        }
        return DislikeDao.dislikeDao;
    }

    private constructor() {
    }

    /**
     * Retrieves all users that disliked a tuit.
     * @param {string} tid Tuit for which users who have disliked this tuit.
     * @returns Promise To be notified when the users who have disliked the tuit are retrieved from the database.
     */
    findAllUsersThatDislikedTuit = async (tid: string): Promise<Dislike[]> =>
        DislikeModel
            .find({tuit: tid})
            .populate("dislikedBy")
            .exec();

    /**
     * Retrieves all tuits disliked by a user.
     * @param {string} uid User for whom their disliked tuits are to be retrieved.
     * @returns Promise To be notified when the disliked tuits are retrieved from the database.
     */
    findAllTuitsDislikedByUser = async (uid: string): Promise<Dislike[]> =>
        DislikeModel
            .find({dislikedBy: uid})
            .populate("tuit")
            .exec();

    /**
     * Inserts a dislike instance into the database.
     * @param {string} uid User who wishes to disliked a tuit.
     * @param {string} tid Tuit that is disliked.
     * @returns Promise To be notified when a dislike instance in inserted into the database.
     */
    userDislikesTuit = async (uid: string, tid: string): Promise<any> =>
        DislikeModel.create({tuit: tid, dislikedBy: uid});

    /**
     * Removes a like instance from the database.
     * @param {string} uid User who wishes to unlike a tuit.
     * @param {string} tid Tuit that is unliked.
     * @returns Promise To be notified when a like instance in removed from the database.
     */
    userUnDislikesTuit = async (uid: string, tid: string): Promise<any> =>
        DislikeModel.deleteOne({tuit: tid, dislikedBy: uid});

    countHowManyDislikedTuit = async (tid: any) =>
        DislikeModel.count({tuit: tid});

    findUserDislikesTuit = async (uid: string, tid: string) =>
        DislikeModel.findOne(
            {tuit: tid, dislikedBy: uid});

}