import React, { Component } from 'react';

import {Header,Title, Refresh, Score} from './components/nav';
import Background from "./components/background";
import CharacterCard from "./components/cards";
import Footer from "./components/footer";
import './App.css';
import dbz from "./dbz.json";

class App extends Component {

  state = {
    dbz
  };

  removeCharacter = id => {
    const dbz = this.state.dbz.filter(dbz => dbz.id !== id);
    this.setState({dbz});
  };

  render() {
    return (
      <Background>
        
        <Header>
            <Refresh>R</Refresh>
            <Title>Clicky Game</Title>
            <Score>99</Score>
        </Header>

        {this.state.dbz.map(dbz => (
          <CharacterCard
            removeCharacter={this.removeCharacter}
            id={dbz.id}
            key={dbz.id}
            name={dbz.name}
            image={dbz.image}
            occupation={dbz.occupation}
            location={dbz.location}
          />
          ))}

        <Footer>
          <p>Clicky Game &copy; Copyright</p>
        </Footer>
      </Background>

      
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
