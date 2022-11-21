import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Tasks } from "../entity/Tasks"

export const getTasks = async (req: Request, res: Response) => {
    const users = await AppDataSource.getRepository(Tasks).find()
    return res.json(users)
}

export const saveTask = async (req, res) => {
    const task = await AppDataSource.getRepository(Tasks).save(req.body)
    return res.json(task)
}

export const getTask = async (req, res) => {
    const { id } = req.params
    const task = await AppDataSource.getRepository(Tasks).findOneBy({ id })
    return res.json(task)
}

export const updateTask = async (req, res) => {
    const { id } = req.params
    const task = await AppDataSource.createQueryBuilder()
        .update(Tasks)
        .set(req.body)
        .where("id = :id", { id })
        .execute()
    if (task.affected == 1) {
        const taskUpdated = await AppDataSource.getRepository(Tasks).findOneBy({ id })
        return res.json(taskUpdated);
    }
    else {
        return res.status(404).json({ message: "Tarefa não encontrada!" })
    }
};

export const deleteTask = async (req, res) => {
    const { id } = req.params
    const task = await AppDataSource.createQueryBuilder()
        .delete()
        .from(Tasks)
        .where("id = :id", { id })
        .execute()

    if (task.affected == 1) {
        return res.status(200).json({ message: "Tarefa excluída com sucesso!" });
    }
    else {
        return res.status(404).json({ message: "Tarefa não encontrada!" })
    }
}

export const finishTask = async (req, res) => {
    const { id } = req.params
    const task = await AppDataSource.getRepository(Tasks).update(id, {
        finished: true,
    })
    if (task.affected == 1) {
        const taskFinished = await AppDataSource.getRepository(Tasks).findOneBy({ id })
        return res.json(taskFinished);
    }
    else {
        return res.status(404).json({ message: "Tarefa não encontrada!" })
    }
};