const zod = require('zod')

// { structure for zod
//     title:"fff",
//     description:"ffff"
// }

const createTodo = zod.object({   
    "title":zod.string(),
    "description":zod.string()
})

const updateTodo = zod.object({
    id: zod.string().length(24, "Invalid MongoDB ObjectId")  // Enforces 24-character string length
})

module.exports = {
    createTodo:createTodo,
    updateTodo:updateTodo
}