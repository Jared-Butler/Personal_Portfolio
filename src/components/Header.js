import React, { Component } from 'react';
//Dependencies
import styled from 'styled-components';
import devices from './../style/devices';

const Head = styled.div`
/* height:90px; */
width: 100vw;
background-color: black;
position: fixed;
transition: 0.2s;

h1{
  color: white;
}

@media ${devices.mobileS}{
    max-height: 50px;
    background-color: black;
    position: fixed;
    transition: 0.2s;
}

@media ${devices.mobileM}{
    max-height: 60px;
}

@media ${devices.mobileL}{
    max-height: 70px;
}

@media ${devices.tablet}{
    max-height: 75px;
}

@media ${devices.laptop}{
    max-height: 85px;
}

@media ${devices.laptopL}{
    max-height: 90px;
}

@media ${devices.desktop}{
    max-height: 100px;
}
`

class Header extends Component {
    constructor(){
        super();
        this.state={
          width: window.innerWidth,
          height: 0,
          newHeight: 0,
        };
      };

      componentDidMount = () => this.elemHeight();

      //This dictates the header shrink height animation on scroll based on screen size.
      elemHeight = () => { 
        let renderHeight = document.getElementById('header').clientHeight;
        let difference = document.getElementById('header').clientHeight * .3;
        let newHeight = document.getElementById('header').clientHeight - difference;
        this.setState({height: renderHeight, newHeight: newHeight});
    };



    render() {
        //This calls the function that controls the header scroll effect.
        window.onscroll = function () { scrollFunction();  }

        //This controls the header scroll effect
        const scrollFunction = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById("header").style.fontSize = "10px";
                document.getElementById("header").style.height = `${this.state.newHeight}px`;

            } else {
                document.getElementById("header").style.fontSize = "15px";
                document.getElementById("header").style.height = `${this.state.height}px`;
            }
        };



        return (
            <Head id="header">
                <h1>Jared Butler</h1>
                <button onClick={() => console.log(this.state)}>Click Me</button>
            </Head>
        )
    }
}

export default Header;