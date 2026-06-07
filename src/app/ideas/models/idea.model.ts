import { Default } from "../../shared/models/default.model";

export interface Idea extends Partial<Default> {
    title: string;
    description: string;
}