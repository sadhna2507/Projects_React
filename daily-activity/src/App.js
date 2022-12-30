import { useState } from 'react';
import './App.css';


function App() {
  const[first, setFirst]= useState(true)
  const[second, setSecond]= useState(true)

  const handleChange=(data)=>{
    // console.log(data)
    if(data == "first"){
      if(first == true){
        console.log(data,"our value")
      }
      setFirst(!first)
    }

    if(data == "second"){
      if(second == true){
        console.log(data,"our value")
      }
      setSecond(!second)

    }


  }

  return (
    <div className="App">
      <input type="checkbox" value={first} onChange={()=>handleChange("first")}/>First
      <input type="checkbox" value={second} onChange={()=>handleChange("second")}/>Secod
    </div>
  );
}

export default App;
