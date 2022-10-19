import Entry from "./entry";


 
 
const List = ({test, handleToggle}) => {
   return (
       <div>
           {test.map(test => {
               return (
                   <Entry key={test.key} test={test} handleToggle={handleToggle}/>
               )
           })}
       </div>
   );
};
 
export default List;