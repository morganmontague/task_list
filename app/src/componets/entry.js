import App from "../app";

function Entry ({test, handleToggle}) {
    return (
        <div onClick={handleToggle} className={test.status ? "text-decoration-line-through" : ""} id={test.key} >
           
            {/* <input className="form-check-input" type="checkbox" value="" id={test.key} onChange={handleToggle}></input> */}
            {test.task}
            
        </div>
    );
}

export default Entry












// onClick={handleToggle} className={test.status ? "text-decoration-line-through" : ""} id={test.key} key={test.key}