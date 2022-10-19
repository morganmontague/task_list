import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Input from "./componets/input";
import {useState} from 'react'
import Data from "./data";
import List from "./componets/list";

function App (props) {

    const [test, setTest] = useState(Data)

    const handleToggle = (id) => {
        let mappy = test.map(task => {
          return (task.id == id ? { ...task, complete: !task.complete } : { ...task});
        });
        setTest(mappy);
      }

    

    // const [text, setText] = useState('');
    // const handleChange = (e) => {
    //     setText(e.currentTarget.value)
    //     console.log(e.currentTarget.value)
    // }

    return(
        <>
            <h1 className="badge bg-primary">checking if bootstap and react are working</h1>    
            <Input />
            <List test={test}/>
        </>
    )
}

export default App