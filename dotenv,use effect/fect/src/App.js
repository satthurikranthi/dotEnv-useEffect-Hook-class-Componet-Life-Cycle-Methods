import logo from './logo.svg';
import './App.css';
import FCCounter from './components/FCCounter';
import { useState } from 'react';
import CCCounter from './components/CCCounter';

function App() {

  let [show,setshow] = useState(true);
  return (
    <div className="App">
      <button onClick={()=>{
        if(show == true){
          setshow(false);
        }else{
          setshow(true);
        }
      }
       
      }>Show/Hide Component</button>
      <br></br>
      {show == true ? <FCCounter></FCCounter> : null}
      {show == true ? <CCCounter></CCCounter> : null}
      
    </div>
  );
}

export default App;
