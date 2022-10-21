function TaskMaker(props) {
    return (
        <>
            <div>
                    <div className={props.task.complete ? "text-decoration-line-through" : ""} id={props.task.id} onClick={(e) => props.handleToggle(e, props.task.key) }>
                        {props.task.task} 
                    </div>
                    <button onClick={props.deletion} id="color" index={props.index} >Ehh I don't wanna</button>
            </div>
        </>
    );
}

export default TaskMaker