import FollowI from "../models/follows/FollowI";

export default interface FollowDaoI {
    userFollowsAnotherUser(uid: string, AnotherUid: string): Promise<any>;
    userUnFollowsAnotherUser(uid: string, AnotherUid: string): Promise<any>;
    userViewsTheirFollowers(uid: string): Promise<FollowI[]>;
    userViewsTheirFollowing(uid: string): Promise<FollowI[]>;
}