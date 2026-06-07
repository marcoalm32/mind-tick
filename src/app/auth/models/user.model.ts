import { Default } from "../../shared/models/default.model";

export interface User extends Partial<Default> {
    name: string;
    email: string;
    password: string;
}