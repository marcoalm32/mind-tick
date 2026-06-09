import { BaseEntity } from "../../shared/models/crud.model";

export interface RegisterPayload extends Partial<BaseEntity> {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}