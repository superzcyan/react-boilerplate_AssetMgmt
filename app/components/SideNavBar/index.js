/**
 *
 * SideNavBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Link} from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Form} from 'react-bootstrap';


function SideNavBar(props,{
  modelTitle = '',
  getNavTitle,
  logOut,
}) {

  getNavTitle =(event)=>{
    modelTitle  = event.target.title
    console.log(modelTitle)
  }
  return (

  <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
  <Navbar.Brand as={Link} to="/Home" title="Assets" onClick={getNavTitle}>Asset Management</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto ">
    <Nav.Link as={Link} to="/Home" title="Assets" onClick={getNavTitle}>Home</Nav.Link>
    <NavDropdown title="Manage" id="basic-nav-dropdown">
      <NavDropdown.Item as={Link} to="/Categories" title="Categories" onClick={getNavTitle}>Categories</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/Manufacturers" title="Manufacturers" onClick={getNavTitle}>Manufacturers</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/Models">Models</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/Processors">Processors</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/Suppliers">Suppliers</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>Sizes</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/Sizes/Hard_Disk">&emsp;Hard Disk</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/Sizes/Memory">&emsp;Memory</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/Sizes/Video_Card">&emsp;Video Card</NavDropdown.Item>   
      <NavDropdown.Divider /> 
      <NavDropdown.Item as={Link} to="/Users">Users</NavDropdown.Item>  
    </NavDropdown>
  </Nav>
    <Nav>
      <Nav.Link >Signed in as :</Nav.Link>
      <NavDropdown title={localStorage.getItem('fullName')} id="basic-nav-dropdown">      
      <NavDropdown.Item as={Link} onClick={logOut} to="/" >Log Out</NavDropdown.Item>
    </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    
    // <Navbar collapseOnSelect expand="lg" >
    // <Nav className="mr-auto flex-column">
    // <Navbar.Brand href="#home">Asset Management</Navbar.Brand>
    // <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    // <Navbar.Collapse id="responsive-navbar-nav">     
    // <Nav className="nav-wrapper nav--no-borders flex-column nav">
    //     <Nav.Link className="nav-item" href="#features">Home</Nav.Link>
    //     <Nav.Link className="nav-item" href="#pricing">Models</Nav.Link>
    //     <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //       <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //       <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //       <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //       <NavDropdown.Divider />
    //       <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //     </NavDropdown>
    //     </Nav>   
    //     </Navbar.Collapse>
    //   </Nav>       
    // </Navbar>
  );
}

SideNavBar.propTypes = {};

export default SideNavBar;
