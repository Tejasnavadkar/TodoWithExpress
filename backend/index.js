const express = require('express')
const app = express()
const port = 3000
const { createTodo, updateTodo } = require('./types')
const { todo } = require('./db')
const cors = require("cors")

app.use(express.json())
app.use(cors())


app.post('/todo', async (req, res) => {     //to pass todo
    const createdPayload = req.body
    const response = createTodo.safeParse(createdPayload)

    if (!response.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }

    //put it in db
    await todo.create({
        title: createdPayload.title,
        description: createdPayload.description,
        completed: false
    })

    res.json({ msg: "Todo created successfully" })

})

app.get('/todos', async (req, res) => {     //to get all todos

    const allTodos = await todo.find({})
    if (allTodos) {
        res.json({
            allTodos
        })
    }
})

app.put('/complete', async (req, res) => {  //to update todo

    const todoId = req.body
    console.log("toooodooooo id=== ", todoId)
    const response = updateTodo.safeParse(todoId)
    if (!response.success) {
        res.status(411).json({
            msg: "you sent wrong id"
        })
        return
    }
    //update db

    // const todo = await todo.find({ todoId })
    // const status = todo.completed
    const {id} = response.data

    const onetodo = await todo.findById(id)
    console.log("onnnnn",onetodo)
    onetodo.completed = true
    await onetodo.save()
    // await todo.update({
    //     _id: req.body.id
    // }, {
    //     completed: true
    // })
    res.json({ msg: "todo marked as completed" })

})

app.listen(port, () => {
    console.log("server started")
})