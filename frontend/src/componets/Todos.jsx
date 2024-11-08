

export function Todos({todos}){

    return <div>
        {todos?.map((todo)=>{
            console.lo
            return <div key={todo._id}>
                <h3>{todo.title}</h3>
                <h4>{todo.description}</h4>
                <button onClick={async ()=>{
                    await fetch("http://localhost:3000/complete",{
                        method:"PUT",
                        body:JSON.stringify({
                            id:todo._id
                        }),
                        headers: {
                            "content-type": "application/json"
                        }
                    })
                }} >{todo.completed === true ? "completed" : "marked as done"}</button>
            </div>
        })}
    </div>
}