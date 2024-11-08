const mongoose = require('mongoose')
const { string } = require('zod')

mongoose.connect("mongodb+srv://tejas12:p2u8qcBJ04TpAJKb@cluster0.3qgh0ao.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }
})

const todo = mongoose.model('todos',todoSchema) // model creation 

module.exports = {
    todo
}