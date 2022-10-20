import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Input from "./componets/input";
import {useState} from 'react'
import data from "./data";
import List from "./componets/list";
import Bye from "./componets/Bye";
import NewTaskInput from "./componets/newTaskInput";


   
  function App (props) {
  
      const [tasks, setTasks] = useState(data)

      function addTask  (task) {
        const newTasks = [...tasks, {key: tasks.length, task, completed: false, }];
        setTasks(newTasks);
    };
      // let key = test.key

    function handleToggle (task, index) {
      const updateTasks = [...tasks]
      updateTasks[index].complete = true
      setTasks(updateTasks)
    }

  //   const newTodos = [...todos];
  //   newTodos[index].isDone = true;
  //   setTodos(newTodos);
  // };
      // function handleToggle (key) {
      //     const mappy = tasks.map(task => {
      //       return (task.key === key ? 
      //         {...task, complete: !task.complete } : 
      //         { ...task});
      //       // This is saying if there is the right key it should take the the
      //     });
      //     setTasks(mappy);
      //     // console.log(tasks)
      //     // console.log(mappy)
      //     // return(
      //     //   <List tasks={tasks} handleToggle={handleToggle}/>
      //     // )
      //   }
      //   console.log(handleToggle)
        // function Bye (test) {
        //   let byebyeList = test.filter(
        //     (test) => test.complete === true
        //   );
        //   let newList = byebyeList.map(byebyeList) (
        //     <div>
        //       {test.task}
        //     </div>
        //   )
        // }
  

  
      return(
          <>
              <h1 className="badge bg-primary">checking if bootstap and react are working</h1>    
              <Input />
              <List tasks={tasks} handleToggle={handleToggle}/>
              <button onClick={handleToggle}>Try</button>
              <div>
                    <NewTaskInput addTask={addTask}  />
                    {console.log(tasks)}
              </div>
          </>
      )
  }
export default App