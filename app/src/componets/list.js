import Entry from "./entry";


 
 
const List = ({test}) => {
   return (
       <div>
           {test.map(test => {
               return (
                   <Entry test={test} />
               )
           })}
       </div>
   );
};
 
export default List;