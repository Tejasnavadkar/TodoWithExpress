import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return <div>
        <input type="text" placeholder="Title" value={title} onChange={(e) => {
            setTitle(e.target.value)
        }} style={{
            padding: 10,
            margin: 10
        }} /> <br />
        <input type="text" placeholder="Description" value={description} onChange={(e) => {
            setDescription(e.target.value)
        }} style={{
            padding: 10,
            margin: 10
        }} /><br />
        <button style={{
            padding: 10,
            margin: 10
        }} onClick={async () => {
            console.log("title--", title)
            await fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
            alert("Todo created ")
        }}>Add Todo</button>
    </div>
}