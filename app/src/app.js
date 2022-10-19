import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Input from "./componets/input";

function App () {

    // const [text, setText] = useState('');
    // const handleChange = (e) => {
    //     setText(e.currentTarget.value)
    //     console.log(e.currentTarget.value)
    // }

    return(
        <>
            <h1 className="badge bg-primary">checking if bootstap and react are working</h1>    
            <Input />
        </>
    )
}

export default App