import { Pagination } from "./pagination.model";

export interface Response<T> {
    success: boolean;
    message: string;
    content: T;
    pagination?: Pagination;
}