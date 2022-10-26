import AccountType from "../AccountType";
import MaritalStatus from "../MaritalStatus";
import Location from "../Location";
import mongoose from "mongoose";

export default interface UserI {
    _id?: mongoose.Schema.Types.ObjectId,
    username: string,
    password: string,
    email: string,
    firstName?: string | null,
    lastName?: string | null,
    profilePhoto?: string | null,
    headerImage?: string | null,
    biography?: string | null,
    dateOfBirth?: Date | null,
    accountType?: AccountType,
    maritalStatus?: MaritalStatus,
    location?: Location | null,
    salary?: number
};