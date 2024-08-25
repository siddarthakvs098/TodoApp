
const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://MrRobot:100xdevs.com@cluster0.vwojkhm.mongodb.net/Todo-App");

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
});

const todo = mongoose.model('todos',todoSchema);
module.exports= {
    todo
}
