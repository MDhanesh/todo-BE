const express = require("express");
const router = express.Router();
const Todo = require("../Modules/TodoModules");

router.get("/", Todo.getTodo);
router.post("/save", Todo.saveTodo);
router.put("/update/:id", Todo.updateTodo);
router.delete("/delete/:id", Todo.delete);

module.exports = router;
