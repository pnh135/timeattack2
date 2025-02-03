import React from "react";
import { useState } from "react";

const MedalForm = () => {
    const [{medals, setMedals}] = useState([]);
    const [country, setCountry] = useState("");
    const [gold, setGold] = useState(0);
    const [silver, setSliver] = useState(0);
    const [bronze, setBronze] = useState(0);
   
    function resetForm () {
        setCountry("");
        setGold(0);
        setSliver(0);
        setBronze(0);
    }

    function AddedMedal (e) {
        e.preventDefault()

        const newMedal = {
            country: parseInt(country),
            gold: parseInt(gold),
            silver: parseInt(silver),
            bronze: parseInt(bronze),
            id: Date.now(),
        }
        setMedals([...medals, newMedal]);

        resetForm()
    }  

    return ( 
        <div>
            <form onSubmit={AddedMedal} >
                <input type="text" value="country" onChange={(e) =>setCountry(e.target.value)} placeholder="메달을 입력하세요"/>
                <input type="number" value="gold" onChange={(e) =>setGold(e.target.value)}/>
                <input type="number" value="sliver" onChange={(e) =>setSliver(e.target.value)}/>
                <input type="number" value="bronze" onChange={(e) =>setBronze(e.target.value)} />
            </form>
            <button>추가하기</button>
            <button>업데이트</button>
        </div>
      );
}
 
export default MedalForm;