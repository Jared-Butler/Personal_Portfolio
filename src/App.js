//React Boilerplate 
import React, { Component } from 'react';
import './App.css';
//Dependencies
import styled from 'styled-components';
//Components 
import Header from './components/Header';


const Main = styled.div`
height:200vh;
img{
  height: 100px;
  width: auto;
}
`

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main >
      
        <Header />
          
        </Main>
        

      
      </div>
    );
  }
}

export default App;
