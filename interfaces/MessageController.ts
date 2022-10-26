import {Request, Response} from "express";

export default interface MessageController {
    userSendsMessage(req: Request, res: Response): void;
    deleteMessageSentToUser(req: Request, res: Response): void;
    findAllMessagesSentByUser(req: Request, res: Response): void;
    findAllMessagesSentToUser(req: Request, res: Response): void;
}