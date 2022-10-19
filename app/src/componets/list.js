import Entry from "./entry";
import App from "../app";

 
 
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