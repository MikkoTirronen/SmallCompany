import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Button from './Button';
const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-left: 10vw;
  padding-top: 200px;
  width: 220px;
  height: 65vh;
  background-color: #212529;
  border-color: white;
  color: black;
  margin-top: 40px
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
