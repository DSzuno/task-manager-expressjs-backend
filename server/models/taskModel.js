import {model, Schema} from "mongoose";

const schema = Schema(
    {
        name: {type: String, required: true},
        description: String,
        priority: {type: String, enum: ['low', 'medium', 'high', 'critical']},
        labels: Array,
        created_at: {type: String, default: Date.now}
    },
    {versionKey: false, autoIndex: true}
)

export const TaskModel = model("Task", schema);