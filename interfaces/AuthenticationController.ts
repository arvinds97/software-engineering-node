import {Request, Response} from "express";

/**
 * @file Declares controller that can talk to the bookmarks data access object model
 */
export default interface AuthenticationControllerI {
    profile(req: Request, res: Response): void;
    signup(req: Request, res: Response): void;
    logout(req: Request, res: Response): void;
}