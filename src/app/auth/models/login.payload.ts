import { BaseEntity } from "../../shared/models/crud.model";

export interface LoginPayload extends Partial<BaseEntity> {
    email: string;
    password: string;
}