function TaskMaker(props) {
    return (
        <>
            <div>
                    <div className={props.task.complete ? "text-decoration-line-through" : ""} onClick={(e) => props.handleToggle(e, props.task.key)}>
                        {props.task.task}
                    </div>
            </div>
        </>
    );
}

export default TaskMaker