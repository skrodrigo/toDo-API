import { Task } from "../models/task-model";
import { TasksRepository } from "../repositories/tasks-repository";

export class DeleteTaskService {
    private readonly tasksRepository: TasksRepository

    constructor() {
        this.tasksRepository = new TasksRepository()
    }

    public async exec(id: number): Promise<boolean> {
        const task = await this.tasksRepository.getById(id);
        if (!task) {
            return false;
        }

        await this.tasksRepository.delete(id);
        return true;
    }
}
