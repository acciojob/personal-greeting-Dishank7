
import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [name , setname] = useState("");

  return (
    <div>
        {/* Do not remove the main div */}
      
      <p>Enter your name:</p>
      <input type="text" onChange={(e)=>{return(setname(e.target.value))}}/>
     {
      name != "" && <p>Hello {name} !</p>
     }
      
        
    </div>
  )
}

export default App
