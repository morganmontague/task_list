import Entry from "./entry";
import TaskMaker from "./taskMaker";

const List = ({ tasks, handleToggle, deletion, className }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskMaker
          handleToggle={handleToggle}
          task={task}
          index={index}
          key={task.id}
          deletion={deletion}
        />
      ))}
    </div>
  );
};

export default List;
