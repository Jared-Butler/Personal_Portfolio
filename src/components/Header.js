import React, { Component } from 'react';
//Dependencies
import styled from 'styled-components';

const Head = styled.div`
height:100px;
width: 100vw;
background-color: black;
position: fixed;
transition: 0.2s;

h1{
  color: white;
}
`

class Header extends Component{

    render() {

        //This calls the function that controls the header scroll effect.
        window.onscroll = function () { scrollFunction() }

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
            <Head id="header">
                <h1>Jared Butler</h1>
            </Head>
        )
    }
}

export default Header;