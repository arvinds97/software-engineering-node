import User from "../users/User";

export default interface FollowI {
    userFollowed: User,
    userFollowing: User
};