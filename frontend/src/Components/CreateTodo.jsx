import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");


    return <>

    <input type="text" style={{
        margin :10,
        padding : 10
    }} placeholder= "title" onChange={function(e){
        setTitle(e.target.value);
        console.log(e.target.value);
    }}  />
      <br />
      <input type="text" style={{
        margin:10,
        padding:10
      }} placeholder= "description" onChange={function(e){
        setDescription(e.target.value);
        console.log(e.target.value);
    }} />
      <br />
      <button style={{
            margin :10
      }} onClick={async function(){
        
        console.log("hello");
        const response = await fetch("http://localhost:2969/todo",{
            method : "POST",
            body : JSON.stringify({
                title : title,
                description : description,
                completed : false
            },),
            headers : {
                "Content-type": "application/json"
            }
        }).then(async (response)=>{
                const json = await response.json();
                alert("todo added");
            })

      }} > Click </button>

    </>
}