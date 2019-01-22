import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import OutsideAlerter from './window'

const Main = styled.div`
height:200vh;
img{
  height: 100px;
  width: auto;
}
`

const Header = styled.div`
height:100px;
width: 100vw;
background-color: black;
position: fixed;
transition: 0.2s;

h1{
  color: white;
}
`




class App extends Component {
  render() {
    //This calls the function that controls the header scroll effect.
    window.onscroll = function() {scrollFunction()}

    //This controls the header scroll effect
    const scrollFunction = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.fontSize = "10px";
        document.getElementById("header").style.height = "50px";

      } else {
        document.getElementById("header").style.fontSize = "15px";
        document.getElementById("header").style.height = "100px";
      }
    };

    return (
      <div className="App">
        <Main >
          <Header id="header">
            <h1>Jared Butler</h1>
          </Header>

          
        </Main>
        

      
      </div>
    );
  }
}

export default App;
