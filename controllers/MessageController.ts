import MessageControllerI from "../interfaces/MessageController"
import MessageDao from "../daos/MessageDao";
import {Express, Request, Response} from "express";
import MessageI from "../models/messages/MessageI";
export default class MessageController implements MessageControllerI {
    private static messageDao: MessageDao = MessageDao.getInstance();
    private static messageController: MessageController | null = null;

    public static getInstance = (app: Express): MessageController => {
        if (MessageController.messageController === null) {
            MessageController.messageController = new MessageController();
            app.post("/api/users/:uid/messages", MessageController.messageController.userSendsMessage);
            app.get("/api/users/:uid/messagesSent", MessageController.messageController.findAllMessagesSentByUser);
            app.get("/api/users/:uid/messagesReceived", MessageController.messageController.findAllMessagesSentToUser);
            app.delete("/api/users/:uid/messages/:mid", MessageController.messageController.deleteMessageSentToUser);
        }
        return MessageController.messageController;
    }

    private constructor() {
    }

    deleteMessageSentToUser = (req: Request, res:Response) =>
        MessageController.messageDao.deleteMessageSentToUser(req.params.uid, req.params.mid)
            .then(messages => res.json(messages));

    findAllMessagesSentByUser= (req: Request, res:Response) =>
        MessageController.messageDao.findAllMessagesSentByUser(req.params.uid)
            .then((messages: MessageI[]) => res.json(messages));

    findAllMessagesSentToUser = (req: Request, res:Response) =>
        MessageController.messageDao.findAllMessagesSentToUser(req.params.uid)
            .then((messages: MessageI[]) => res.json(messages));

    userSendsMessage = (req: Request, res:Response) =>
        MessageController.messageDao.userSendsAMessageToAnotherUser(req.params.body, req.body)
            .then((message: MessageI) => res.json(message));

}