import MessageDaoI from "../interfaces/MessageDao";
import MessageI from "../models/messages/MessageI";
import Message from "../models/messages/Message";
import MessageModel from "../mongoose/messages/MessageModel";

export default class MessageDao implements MessageDaoI {
    private static messageDao: MessageDao | null=null;
    public static getInstance = () : MessageDao => {
        if (MessageDao.messageDao == null) {
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao;
    }
    private constructor() {
    }

    deleteMessageSentToUser = async (uid: string,mid: string): Promise<any> =>
        await MessageModel
            .deleteOne(
                {
                    to: uid,
                    _id: mid
                }
            );

    findAllMessagesSentByUser = async (uid: string): Promise<MessageI[]> =>
        await MessageModel
            .find({from: uid})
            .populate("message")
            .exec();

    findAllMessagesSentToUser = async (uid: string): Promise<MessageI[]> =>
        await MessageModel
            .find({from: uid})
            .populate("message")
            .exec();

    userSendsAMessageToAnotherUser = async (uid: string, message: Message): Promise<any> =>
        await MessageModel
            .create({
                ...message,
                from: uid
            });

}