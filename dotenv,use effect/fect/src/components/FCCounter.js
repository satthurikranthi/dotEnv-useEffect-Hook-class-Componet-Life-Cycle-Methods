import React, { useEffect, useState } from 'react'

function FCCounter() {

let [counter,setCounter] = useState(0);
let [Runs,setRuns] = useState(0);


//oncomponent Load


useEffect(()=>{

 console.log("FCCounter - loaded");

},[]);

//specifically counter sv changes

useEffect(()=>{
    console.log(`Counter sv changed`);
},[counter]);

//specifically runs sv changes

useEffect(()=>{
    console.log(`Runs sv changed`);
},[Runs]);

//either counter or runs sv changes

useEffect(()=>{
    console.log(`counter/Runs sv changed`);
},[counter,Runs]);

//any sv changes

useEffect(()=>{
    console.log(`Any sv changed`);
});

//oncomponent unload


useEffect(()=>{

    return ()=>{
        console.log("FCCounter - component will unload");
    }

},[]);

  return (
    <div className="counter">
        <h2>FCCounter</h2>
        <h1>Counter:{counter}</h1>
        <h1>Runs:{counter}</h1>
        <button onClick={()=>{
            setCounter(counter +1);
        }}>Increment</button>
        <button onClick={()=>{
            setCounter(counter -1);
        }}
        >Decrement</button>
        <br></br>
        <button onClick={()=>{
            setRuns(Runs +1);
        }}>Increment Runs</button>
        <button onClick={()=>{
            setRuns(Runs -1);
        }}
        >Decrement Runs</button>

    </div>
  )
}

export default FCCounter;