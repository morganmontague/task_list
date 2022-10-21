function TaskMaker(props) {
  return (
    <>
      <div>
        <div
          className={
            props.task.complete
              ? "text-decoration-line-through fs-2 text-muted"
              : "fs-2"
          }
          id={props.task.id}
          onClick={(e) => props.handleToggle(e, props.task.key)}
        >
          {props.task.task}
        </div>
        <button onClick={props.deletion} id="color" index={props.index}>
          Delete
        </button>
      </div>
    </>
  );
}

export default TaskMaker;
