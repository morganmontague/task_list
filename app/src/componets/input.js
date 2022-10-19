import {useState} from 'react'
import Header from './header';

function Input () {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        if(e.currentTarget.value === ' '){
            return
        }
        setText(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }
    return(
        <>
        <Header />

        <input value={text} type="text" onChange={handleChange} placeholder="Enter task..."/>
        
        </>
    )
}

export default Input