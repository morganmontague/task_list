import {useState} from 'react'
import Header from './header';


    function NewTaskInput({ addTask }) {
        const [value, setValue] = useState("");
    
        const handleSubmit = e => {
            e.preventDefault();
            if (value === '') return;
            if (value == ' ') return;
            
            addTask(value);
            setValue("");
        }
        
        return (
            <>
                    <input onSubmit={handleSubmit}
                    type="text"
                    className="input"
                    value={value}
                    placeholder="Insert Tasks Here..."
                    onChange={e => setValue(e.target.value)}
                    />
            <button onClick={handleSubmit}>Meh</button>
            </>

                    
                    );
                }

    export default NewTaskInput