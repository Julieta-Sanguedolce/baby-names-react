import { exampleNames } from "./data/babyNamesData";
import { ListOfNames } from "./ListOfNames";
import { orderAlphabetically } from "./orderAlphabetically";
import "./App.css";
import { useState } from "react";


function App(): JSX.Element {
  const [typedMessage, setTypedMessage] = useState("");

  return (
  <div className="general">
    <h1>Baby Names App</h1>
    <p>See a list of different baby names</p>
    <label> Enter letters to filter: </label>
    <input
        value={typedMessage} onChange={(event) => {setTypedMessage(event.target.value);}}
      />
    <hr />
    <ListOfNames 
      namesArray = {orderAlphabetically(exampleNames)} nameToFilter = {typedMessage} 
    />
  </div>

  )
}

export default App;
