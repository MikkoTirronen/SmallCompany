import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Button from './Button';
const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  margin-left: 6vw;
  padding-top: 200px;
  width: 220px;
  height: 75vh;
  background-color: #212529;
  border-color: white;
  color: black;
  
`;
const StyledHeading = styled.h3`
  color: white;
  font-weight: 700;
  text-align: center;
`

export default function StyledNavBar(props) {
    return (
      <>
        <StyledNav col={props.col}>
          {props.children}
          <StyledHeading>HOME PAGE</StyledHeading>

          <Link to="/create/customer">
            <Button padding margin>Create New Customer</Button>
          </Link>
        </StyledNav>
      </>
    );
}
