function TaskMaker({ task }) {
    return (
        <div className={task.complete ? "text-decoration-line-through" : ""} id={task.key}>
            {task.task}
        </div>
    );
}

export default TaskMaker