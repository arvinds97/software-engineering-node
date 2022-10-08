import User from "./User";

export default class Tuit {
    private id: string = '';
    tuit: string = '';
    postedOn: Date = new Date();
    postedBy: User | null = null;
    constructor(id: string, tuit: string, postedOn: Date, postedBy: User) {
        this.id = id;
        this.tuit = tuit;
        this.postedBy = postedBy;
        this.postedOn = postedOn;
    }
}
