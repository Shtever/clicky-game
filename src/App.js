import React from 'react';
import './App.css';
import Cards  from "./Components/Card"
import info from "./library.json"

function App() {
  // console.log(info);
  return (
    <Cards
    //THIS DEFINES THE 'props' INFO INTO CARD COMPONENT
    id={info[0].id}
    name={info[0].name}
    image={info[0].image}/>
  );
}

export default App;
