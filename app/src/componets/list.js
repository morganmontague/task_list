import Entry from "./entry";
import TaskMaker from "./taskMaker";

 
const List = ({tasks, handleToggle}) => {
   return (
   <div >
    {tasks.map((task, index) => (
   <TaskMaker
    handleToggle={handleToggle}
    task={task}
    index={index}
    key={index}
        />   
    )
    )
    }
       </div>
   );
};

export default List;


