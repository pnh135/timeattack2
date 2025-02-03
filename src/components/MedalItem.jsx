import React from "react";
 
export default MedalItem({medals, setMedals}) {
    return (
        <li>
        <span>{medal.country}</span>
        <span>{medal.gold}</span>
        <span>{medal.sliver}</span>
        <span>{medal.bronze}</span>
        <button>삭제</button>
        </li>
    )
};