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
        };
      };

      componentDidMount = () => {this.elemHeight()};

      //An attempt at setting the height of the header at page load. Will figure out 
      //where I went wrong tomorrow.
      elemHeight = () => { 
      console.log(this.state.height)
        let renderHeight = document.getElementById('header').clientHeight;
        this.setState({height: renderHeight});
      
      let difference = this.state.height * .3;
      let newHeight = this.state.height - difference;
      console.log(this.state.height)

    };



    render() {
        //Defining the variables to be used in the header scroll effect.
        // const height = height based on max-height
        // const newHeight = height - 30%
        //This calls the function that controls the header scroll effect.
        window.onscroll = function () { scrollFunction();  }

        //This controls the header scroll effect
        const scrollFunction = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById("header").style.fontSize = "10px";
                document.getElementById("header").style.height = "70px";

            } else {
                document.getElementById("header").style.fontSize = "15px";
                document.getElementById("header").style.height = "90px";
            }
        };



        return (
            <Head id="header">
                <h1>Jared Butler</h1>
            </Head>
        )
    }
}

export default Header;