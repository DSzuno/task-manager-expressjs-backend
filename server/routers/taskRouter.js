import express from "express";
import {taskController} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", taskController.index);

router.post("/", taskController.create);

router.put("/:id", taskController.update);

router.delete("/:id", taskController.remove);

export default router;
