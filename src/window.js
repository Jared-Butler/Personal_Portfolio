import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

//Testing how to create menus that close when you click away from them. 
const Window = styled.div`
height: 200px;
width: 50%;
background-color: red;
`
/**
 * Component that alerts if you click outside of it
 */
export default class OutsideAlerter extends Component {
  constructor(props) {
    super(props);



    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      alert('You clicked outside of me!');
    }
  }

  render() {
    return <Window ref={this.setWrapperRef}>{this.props.children}</Window>;
  }
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};