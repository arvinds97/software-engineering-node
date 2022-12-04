import User from "../users/User";
import TuitI from "../tuits/TuitI";
import DisLikeI from "./DislikeI";
import Tuit from "../tuits/Tuit";

export default class Dislike implements DisLikeI {
    private id: string = '';
    dislikedBy: User;
    tuit: Tuit;
    constructor(id: string, tuit: Tuit, dislikedBy: User) {
        this.id = id;
        this.dislikedBy = dislikedBy;
        this.tuit = tuit;
    }

}