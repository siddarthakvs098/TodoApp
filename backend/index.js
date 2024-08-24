const express = require("express")

const app = express();

const {createTodo, updateTodo} = require("./types");
const { todo } = require("./db");

console.log(createTodo);
app.use(express.json());

// body 
//title string
// description string
app.post("/todo",async function(req,res){
    const createPayload = req.body;
    
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description : createPayload.description,
        completed: createPayload.completed
    });
    res.json({
        "msg": "Todo added"
    })
});

app.get("/todos",async function(req,res){

    const todos = await todo.find({});
    res.json({
        todos
    });

});

app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        if(!parsedPayload.success){
            res.status(411).json({
                msg: "you sent the wrong inputs"
            })
            return
        }
    }

    await todo.findOneAndUpdate({
        _id : req.body._id
    },{
        completed:true
    })
    res.json({
        msg : "Sucessfully updated"
    })
});

app.listen(2969);