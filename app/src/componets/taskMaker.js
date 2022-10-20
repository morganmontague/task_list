function TaskMaker({ task }, {handleToggle}) {
    return (
        <div className={task.complete ? "text-decoration-line-through" : ""} id={task.key} onClick={handleToggle}>
            {task.task}
        </div>
    );
}

export default TaskMaker