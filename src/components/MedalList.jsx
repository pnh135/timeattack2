import React from "react";
import MedalItem from "./MedalItem";
// import MedalItem from "./MedalItem";

const MedalList = () => {
    return ( 
            {medals.map((medal) => {
             <ul>
             <MedalItem key={medal.id}/>
             </ul>   
            } )}
     );
}
 
export default MedalList;