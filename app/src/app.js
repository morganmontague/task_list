import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import data from "./data";
import List from "./componets/list";
import NewTaskInput from "./componets/newTaskInput";
import HeaderTop from "./componets/header";
import ButtonMaker from "./componets/ButtonMaker";
import "./app.css";

function App(props) {
  
  const [tasks, setTasks] = useState(data);
  // let boo = localStorage.getItem("test");
  // useState = boo !== null ? JSON.parse(boo) : console.log("broke");


  function addTask(task) {
    const newTasks = [
      ...tasks,
      {
        key: tasks.length,
        task,
        complete: false,
        id: tasks.length,
        archive: false,
      },
    ];
    setTasks(newTasks);
    localStorage.setItem("test", JSON.stringify(newTasks));
  }

  let bahh = tasks.filter((task) => task.complete == true).length;
  let sheep = tasks.filter((task) => task.complete == false).length;

  function handleToggle(e, index) {
    const updateTasks = [...tasks];
    if (updateTasks.id == updateTasks.key) {
      updateTasks[index].complete = !updateTasks[index].complete;
    }
    if (updateTasks.id !== updateTasks.key) {
      return;
    }

    setTasks(updateTasks);
    console.log(e);
    console.log("works");
    localStorage.setItem("test", JSON.stringify(updateTasks));
  }

  function completed() {
    let completedTasks = tasks.filter((task) => task.complete == true);
    console.log(completedTasks);
    setTasks(completedTasks);
  }

  function toDo() {
    let activeTasks = tasks.filter((task) => task.complete == false);
    console.log(activeTasks);
    setTasks(activeTasks);
  }

  function boggle() {
    let arch = localStorage.getItem("test");
    const changeArch = arch !== null ? JSON.parse(arch) : console.log("broke");
    console.log("Before the for loop", changeArch);
    for (let i = 0; i < changeArch.length; i++) {
      if (changeArch[i].complete == true) {
        changeArch[i].archive = true;
      }
    }
    let newThing = changeArch.filter((task) => task.archive == false);
    console.log(changeArch);
    console.log(newThing);
    setTasks(newThing);
    localStorage.setItem("test", JSON.stringify(newThing));
  }

  // function deletion() {
  //   let del = localStorage.getItem("test");
  //   const changeDel = del !== null ? JSON.parse(del) : console.log("broke");
  //   console.log("Before the for loop", changeDel);
  //   changeDel.archiveNum = 57
  //   let newThing = changeDel.filter((task) => task.archive == false);
  //   console.log(changeDel);
  //   console.log(newThing);
  //   setTasks(newThing);
  //   localStorage.setItem("test", JSON.stringify(newThing));
  // }


  function allTasks() {
    let recall = localStorage.getItem("test");
    const re = recall !== null ? JSON.parse(recall) : console.log("broke");
    console.log(re);
    setTasks(re);
  }

  return (
    <>
      <div className="container">
        <div>

          <HeaderTop />
          <NewTaskInput addTask={addTask} />
          {<List tasks={tasks} handleToggle={handleToggle} />}
          {/* deletion={deletion} */}
          <br></br>
          <div>The amount of Tasks completed is {bahh}</div>
          <div>The amount of Tasks to do is {sheep} </div>
          <ButtonMaker
            text={"All"}
            handleToggle={allTasks}
            className={"btn bg-primary"}
          />
          <ButtonMaker
            text={"Active"}
            handleToggle={toDo}
            className={"btn bg-primary"}
          />
          <ButtonMaker
            text={"Completed"}
            handleToggle={completed}
            className={"btn bg-primary"}
          />
          <br></br>
          <ButtonMaker
            text={"Remove Completed"}
            handleToggle={boggle}
            className={"btn bg-danger"}
          />
        </div>
      </div>
    </>
  );
}
export default App;
