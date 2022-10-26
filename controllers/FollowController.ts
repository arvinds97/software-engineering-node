import FollowControllerI from "../interfaces/FollowController";
import FollowDao from "../daos/FollowDao";
import {Express, Request, Response} from "express";

export default class FollowController implements FollowControllerI {
    private static followDao: FollowDao = FollowDao.getInstance();
    private static followController: FollowController | null = null;

    public static getInstance = (app: Express): FollowController => {
        if (FollowController.followController === null) {
            FollowController.followController = new FollowController();
            app.get("/api/users/:uid/followers", FollowController.followController.userViewsTheirFollowers);
            app.get("/api/users/:uid/following", FollowController.followController.userViewsTheirFollowing);
            app.post("/api/users/:uid/follow/:anotherUid", FollowController.followController.userFollowsAnotherUser);
            app.delete("/api/users/:uid/follow/:anotherUid", FollowController.followController.userUnFollowsAnotherUser)
        }

        return FollowController.followController;
    }

    private constructor() {
    }

    userFollowsAnotherUser = (req: Request, res: Response) =>
        FollowController.followDao.userFollowsAnotherUser(req.params.uid, req.params.anotherUid)
            .then(follows => res.json(follows));

    userUnFollowsAnotherUser = (req: Request, res: Response) =>
        FollowController.followDao.userUnFollowsAnotherUser(req.params.uid, req.params.anotherUid)
            .then(follows => res.json(follows));

    userViewsTheirFollowers = (req: Request, res: Response) =>
        FollowController.followDao.userViewsTheirFollowers(req.params.uid)
            .then(follows => res.json(follows));

    userViewsTheirFollowing = (req: Request, res: Response) =>
        FollowController.followDao.userViewsTheirFollowing(req.params.uid)
            .then(follows => res.json(follows));
}