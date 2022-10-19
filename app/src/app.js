import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Input from "./componets/input";
import {useState} from 'react'
import data from "./data";
import List from "./componets/list";
import Bye from "./componets/Bye";

import './App.css';
 
function App() {
  const [ toDoList, setToDoList ] = useState(data);
 
 
 return (
   <div className="App">
     <Input />
     <ToDoList toDoList={toDoList}/>
   </div>
 );
}

export default App
// function App (props) {

//     const [test, setTest] = useState(Data)
//     // let key = test.key
//     function handleToggle (id) {
//         let mappy = test.map(task => {
//           return (task.id == test.key ? { status: !test.status,  ...task } : {  status: !test.status, ...task});
//           // This is saying if there is the right key it should take the the
//         });
//         setTest(mappy);
//         console.log(test)
//         console.log(mappy)
//       }

//       // function Bye (test) {
//       //   let byebyeList = test.filter(
//       //     (test) => test.status === true
//       //   );
//       //   let newList = byebyeList.map(byebyeList) (
//       //     <div>
//       //       {test.task}
//       //     </div>
//       //   )
//       // }

    

//     // const [text, setText] = useState('');
//     // const handleChange = (e) => {
//     //     setText(e.currentTarget.value)
//     //     console.log(e.currentTarget.value)
//     // }

//     return(
//         <>
//             <h1 className="badge bg-primary">checking if bootstap and react are working</h1>    
//             <Input />
//             <List test={test} handleToggle={handleToggle}/>
//             {/* <Bye test={test} /> */}
//         </>
//     )
// }