import {Request, Response} from "express";

export default interface FollowController {
    userFollowsAnotherUser(req: Request, res: Response): void;
    userUnFollowsAnotherUser(req: Request, res: Response): void;
    userViewsTheirFollowers(req: Request, res: Response): void;
    userViewsTheirFollowing(req: Request, res: Response): void;
}