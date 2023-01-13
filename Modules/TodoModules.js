const TodoSchema = require("../Schema/TodoSchema");

exports.getTodo = async (req, res) => {
  const todo = await TodoSchema.find();
  res.status(200).send(todo);
};

exports.saveTodo = async (req, res) => {
  const text = TodoSchema({
    text: req.body.text,
  });
  try {
    const save = await text.save();
    res.status(200).send({ Data: save });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "error" });
  }
};

exports.updateTodo = async (req, res) => {
  const userid = { _id: req.params.id };
  const options = {
    upsert: true,
    new: true,
  };
  try {
    const updateTodo = await TodoSchema.findOneAndUpdate(
      userid,
      {
        text: req.body.text,
      },
      options
    );
    res.status(200).send({ Data: updateTodo });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "error" });
  }
};

exports.delete = async (req, res) => {
  const userid = { _id: req.params.id };
  const result = await TodoSchema.deleteOne(userid);
  if (result) {
    res.status(200).send({ success: true, msg: "Data Deleted" });
  } else {
    res.status(200).send({ success: false, msg: "Data Not Found" });
  }
};
