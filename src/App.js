import React, { Component } from 'react';
import './App.css';
import Cards from "./Components/Card"
import Container from "./Components/Container"
import info from "./library.json"
class App extends Component {
  state = {
    info,
    clickedArr: [],
  }

  clickPic = id => {
    for (let i = info.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = info[i]
      info[i] = info[j]
      info[j] = temp
    } return info
  }
  // console.log(info);
  render() {
    return (
      <div>
        <Container> </Container>
        <Cards
          //THIS DEFINES THE 'props' INFO INTO CARD COMPONENT
          id={info[0].id}
          name={info[0].name}
          image={info[0].image} />
        <Cards
          //THIS DEFINES THE 'props' INFO INTO CARD COMPONENT
          id={info[1].id}
          name={info[1].name}
          image={info[1].image} />
        <Cards
          //THIS DEFINES THE 'props' INFO INTO CARD COMPONENT
          id={info[2].id}
          name={info[2].name}
          image={info[2].image} />
        <Cards
          //THIS DEFINES THE 'props' INFO INTO CARD COMPONENT
          id={info[3].id}
          name={info[3].name}
          image={info[3].image} />
        <Cards
          //THIS DEFINES THE 'props' INFO INTO CARD COMPONENT
          id={info[4].id}
          name={info[4].name}
          image={info[4].image} />
        <Cards
          //THIS DEFINES THE 'props' INFO INTO CARD COMPONENT
          id={info[5].id}
          name={info[5].name}
          image={info[5].image} />
        <Cards
          //THIS DEFINES THE 'props' INFO INTO CARD COMPONENT
          id={info[6].id}
          name={info[6].name}
          image={info[6].image} />
        <Cards
          //THIS DEFINES THE 'props' INFO INTO CARD COMPONENT
          id={info[7].id}
          name={info[7].name}
          image={info[7].image} />
        <Cards
          //THIS DEFINES THE 'props' INFO INTO CARD COMPONENT
          id={info[8].id}
          name={info[8].name}
          image={info[8].image} />
        <Cards
          //THIS DEFINES THE 'props' INFO INTO CARD COMPONENT
          id={info[9].id}
          name={info[9].name}
          image={info[9].image} />
        <Cards
          //THIS DEFINES THE 'props' INFO INTO CARD COMPONENT
          id={info[10].id}
          name={info[10].name}
          image={info[10].image} />
        <Cards
          //THIS DEFINES THE 'props' INFO INTO CARD COMPONENT
          id={info[11].id}
          name={info[11].name}
          image={info[11].image} />

      </div >
    );
  }
}
export default App;
