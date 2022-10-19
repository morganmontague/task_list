import {useState} from 'react'

function Input () {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }
    return(
        <>
        <label for="task">
            <h1>Task List:</h1>
        </label>

        <input value={text} type="text" onChange={handleChange} placeholder="Enter task..."/>
        
        </>
    )
}

export default Input