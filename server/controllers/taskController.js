import {TaskModel} from "../models/taskModel.js";

const index = async (req, res) => {
    const query = req.query.search !== "null" ? {name: {$regex: '.*' + req.query.search + '.*'}} : {};
    const results = await TaskModel.find(query).exec();
    res.send(results).status(200);
}

const create = async (req, res) => {
    const result = new TaskModel({
        ...req.body
    })
    await result.save();
    res.send(result).status(204);
}

const update = async (req, res) => {
    const result = await TaskModel.findByIdAndUpdate(req.params.id, req.body)
    res.send(result).status(204);
}

const remove = async (req, res) => {
    const result = await TaskModel.findByIdAndDelete(req.params.id)
    res.send(result).status(204);
}

export const taskController = {
    index,
    create,
    update,
    remove
};
