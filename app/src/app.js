import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {useState, useEffect} from 'react'
import data from "./data";
import List from "./componets/list";
import Bye from "./componets/Bye";
import NewTaskInput from "./componets/newTaskInput";
import HeaderTop from "./componets/header";
import ButtonMaker from "./componets/ButtonMaker";
import './app.css'
import Form1 from "./test";

   
  function App (props) {
  
      const [tasks, setTasks] = useState(data)

      function addTask  (task) {
        const newTasks = [...tasks, {key: tasks.length+1, task, complete: false, id: tasks.length +1 }];
        setTasks(newTasks);
        {localStorage.setItem('test', JSON.stringify(tasks))}
    };
    let bahh = tasks.filter(task => task.complete == true).length
    let sheep = tasks.filter(task => task.complete == false).length

    function handleToggle (e, task, index) {
      const updateTasks = [...tasks]
      (task.key === index, 
      {...task, complete: !task.complete });
      setTasks(updateTasks)
      console.log(e.target)
    }

    useEffect(() => {
      {localStorage.setItem('test2', JSON.stringify(tasks))}
    }
    )
    window.localStorage.setItem('test4', JSON.stringify(tasks))
    const [name, setName] = useState(() => {
      const saved = localStorage.getItem("test4")
      const initialValue = JSON.parse(saved)
      return initialValue || ""
    }
    )

      return(
          <>
              <h1 className="badge bg-primary">checking if bootstap and react are working</h1>
              <HeaderTop />  
              <NewTaskInput addTask={addTask}  />
              {console.log(tasks)}
              <List tasks={tasks} handleToggle={handleToggle}/>
              <div>The amount of Tasks completed is {bahh}</div>
              <div>The amount of Tasks to do is {sheep} </div>
              <ButtonMaker text={('All')} />
              <ButtonMaker text={('Active')} />
              <ButtonMaker text={('Completed')}/>
              <br></br>
              <ButtonMaker text={('Remove Completed')} />
              <Form1 />
            

              
          </>
      )
  }
export default App