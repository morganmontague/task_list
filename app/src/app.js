import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Input from "./componets/input";
import {useState} from 'react'
import data from "./data";
import List from "./componets/list";
import Bye from "./componets/Bye";
import NewTaskInput from "./componets/newTaskInput";
import HeaderTop from "./componets/header";
import ButtonMaker from "./componets/ButtonMaker";

   
  function App (props) {
  
      const [tasks, setTasks] = useState(data)

      function addTask  (task) {
        const newTasks = [...tasks, {key: tasks.length+1, task, complete: false, id: tasks.length +1 }];
        setTasks(newTasks);
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
            

              
          </>
      )
  }
export default App