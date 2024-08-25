import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { CreateTodo} from './Components/CreateTodo'
import { Todos } from './Components/Todos'

function App() {
  
  const [todos,useTodos] = useState([{"title":"Hello","description":"World","complete":true},{"title":"Hello","description":"World","complete":false}]);

  return (
    <>
        <CreateTodo></CreateTodo>
        <Todos todos= {todos}  ></Todos>
    </>
  )
}

export default App
