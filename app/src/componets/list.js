import Entry from "./entry";
import TaskMaker from "./taskMaker";

 
const List = ({tasks, handleToggle}) => {
   return (
       <div>
        {tasks.map((task, index) => (
    <TaskMaker
    task={task}
    index={index}
    key={index}
    />))}
       </div>
   );
};

export default List;
{/* {tasks.map(tasks => {
    return (
        <Entry key={tasks.key} tasks={tasks} handleToggle={handleToggle}/>
    )
})} */}

