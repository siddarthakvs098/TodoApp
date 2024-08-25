
// eslint-disable-next-line react/prop-types
export function Todos({todos}){

    
    return <>

      { 
          // eslint-disable-next-line react/prop-types
          todos.map(function(todo){
                // eslint-disable-next-line react/jsx-key
                return <div  >
                     <h1>{todo.title}</h1>
                     <h2>{todo.description}</h2>
                     <button>{(todo.complete==true)?"Completed":"Mark as complete"}</button>
                </div>
          })
          
          
      }
    
    </>
}