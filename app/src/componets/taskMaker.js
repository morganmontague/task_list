function TaskMaker({ task }, {handleToggle}) {
    return (
        <>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="crossOutRadio" id={task.key+1} onClick={handleToggle}></input>
                <label className="form-check-label" htmlFor={task.key-1}>
                    <div className={task.complete ? "text-decoration-line-through" : ""} >
                        {task.task}
                    </div>
                </label>
            </div>
        </>

    );
}

export default TaskMaker