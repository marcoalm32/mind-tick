import { Default } from "../../../shared/models/default.model";
import { PriorityTask } from "./types/priority-task";
import { StatusTask } from "./types/status-task";

export interface Task extends Partial<Default>{
    name: string;
    detail: string;
    priority: PriorityTask;
    status: StatusTask;
    deadline?: string;
}