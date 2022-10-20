import Entry from "./entry";
import TaskMaker from "./taskMaker";

 
const List = ({tasks, handleToggle}) => {
   let test = window.localStorage.setItem('test3', JSON.stringify(tasks))
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


