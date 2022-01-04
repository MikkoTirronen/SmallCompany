import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Button from './Button';
const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  margin-left: 10vw;
  padding-top: 200px;
  width: 200px;
  height: 70vh;
  background-color: #3f3f3f;
  border: solid;
  color: black;
  border-color: white;
`;
const StyledHeading = styled.h3`
  color: white;
  font-weight: 700;
  text-align: center;
`
const StyledText = styled.p`
 color: white;
 font-weight: 600;
 background-color: green;
`
export default function StyledNavBar(props) {
    return (
      <>
        <StyledNav col={props.col} className="rounded">
          {props.children}
          <StyledHeading>HOME PAGE</StyledHeading>

          <Link to="/create/customer">
            <Button padding margin>Create New Customer</Button>
          </Link>
        </StyledNav>
      </>
    );
}
//          <a className="navbar-brand" href="/home">HOME PAGE</a>
//           <Link to="/create/customer">Create New Customer</Link> 