const express = require("express");
const {
    getAllTask,
    addTask,
    updateTask,
    deleteTask,
    markAsComplete,
} = require("../controller/TaskController");
const router = express.Router();

router.get("/all-tasks", getAllTask);
router.post("/add-task", addTask);
router.put("/update-task", updateTask);
router.delete("/remove-task", deleteTask);
router.post("/mark-as-complete/:id", markAsComplete);

module.exports = router;
