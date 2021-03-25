import React, { Component, useState } from "react";
import logo from "../../public/logo.png";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarStyle = styled(Navbar)`
  /* border-bottom: 0.5px solid grey; */
  box-shadow: 0 8px 4px -9px rgba(0, 0, 0, 0.3);
  background-color: #fff;
`;

const Brand = styled(Navbar.Brand)`
  width: 12rem;
  height: 5rem;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${logo});
  margin: 0;
`;

const BrandText = styled.h3`
  text-align: left;
  justify-items: left;
  margin-left: -3%;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 64rem) {
    display: none;
  }
`;

const NavStyle = styled(Nav)`
  width: 100%;
`;

const NavLinkStyle = styled(NavLink)`
  color: #000;
  text-decoration: none;
  margin: 0 auto;
  /* text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8); */
`;

export default function Navigator(props) {
  return (
    // <div collapseOnSelect className="navbar-container ">
    <NavbarStyle expand="lg" variant="light">
      <Brand to="/" />
      <BrandText>
        Mauritian <br />
        Barbarians
      </BrandText>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavStyle className="navbar listStyle">
          <NavLinkStyle exact to="/">
            Home
          </NavLinkStyle>
          <NavLinkStyle to="/gallery">Gallery</NavLinkStyle>
          <NavLinkStyle to="/sponsors">Sponsors</NavLinkStyle>
          <NavLinkStyle to="/founders">Founders</NavLinkStyle>
          <NavLinkStyle to="/contact">Contact Us</NavLinkStyle>
        </NavStyle>
      </Navbar.Collapse>
    </NavbarStyle>
  );
}
