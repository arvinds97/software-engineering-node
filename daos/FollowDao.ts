import FollowDaoI from "../interfaces/FollowDao";
import TuitDao from "./TuitDao";
import FollowModel from "../mongoose/follows/FollowModel";
import FollowI from "../models/follows/FollowI";
export default class FollowDao implements FollowDaoI {
    private static followDao: FollowDao | null = null;
    public static getInstance = (): FollowDao => {
        if (FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }
    private constructor() {
    }

    userFollowsAnotherUser = async (uid: string, anotherUid: string): Promise<any> =>
        FollowModel.create({
           userFollowed:  anotherUid,
           userFollowing: uid
        });

    userUnFollowsAnotherUser = async (uid: string, anotherUid: string): Promise<any> =>
        FollowModel.deleteOne({
            userFollowed:  anotherUid,
            userFollowing: uid
        });

    userViewsTheirFollowers = async (uid: string): Promise<FollowI[]> =>
        FollowModel.find({userFollowed: uid})
            .populate("userFollowing")
            .exec();

    userViewsTheirFollowing = async (uid: string): Promise<FollowI[]> =>
        FollowModel.find({userFollowing: uid})
            .populate("userFollowed")
            .exec();

}