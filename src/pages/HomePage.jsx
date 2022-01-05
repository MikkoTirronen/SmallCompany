import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CustomerList, LoggedInUser } from "../App";
import { fetchData } from "../utils/helperFunctions";
import UserId from "../components/UserId";
import StyledNavBar from "../components/StyledNavBar";

import styled from "styled-components";
import Banner from "../components/Banner";

const StyledHomePage = styled.div`
  display: d-flex;
  background-color: ;
  color: white;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  height: 100%;
`;
const StyledCustomerContainer = styled.div`
background-color:white;
color:black;
width: 60%;
margin-left: 140px;
border: solid;
min-width: 500px;
`
const StyledContainer = styled.div`
  display: d-flex;
  overflow-y: auto;
  overflow-x: hidden;
  width:60%;
  height: 73vh;
`

export default function HomePage() {
  const { customerList, setCustomerList } = useContext(CustomerList);
  const { currentUser, setCurrentUser } = useContext(LoggedInUser);
  const currentUserUrl = "https://frebi.willandskill.eu/api/v1/me";
  const customerListUrl = "https://frebi.willandskill.eu/api/v1/customers";

  useEffect(() => {
    fetchData(customerListUrl, setCustomerList);
    fetchData(currentUserUrl, setCurrentUser);
  }, []);

  return (
    <StyledHomePage className="row p-0 g-0">
      <Banner className= "border">Customer Registry</Banner>
      <StyledNavBar className= "border"/>
      <StyledContainer>
      <div className="">
        
      
        {customerList &&
          customerList.results.map((item, index) => {
            return (
              <div className="row" key={index} >
                <hr />
                

                <StyledCustomerContainer>
                  <label htmlFor="name">Name: </label>
                  <p id="name">{item.name}</p>
                  <label htmlFor="email">Email:</label>
                  <p id="email">{item.email}</p>
                  <label htmlFor="phone">Phone Number:</label>
                  <p id="phone">{item.phoneNumber}</p>
                  <Link to={`/${index}`}>...More</Link>
                </StyledCustomerContainer>
                
              </div>
            );
          })}
        
        <hr />
        <br />
      </div></StyledContainer>
      <footer className="d-flex justify-content-center bg-dark position-absolute bottom-0 pt-3 border">
        <UserId />
      </footer>
    </StyledHomePage>
  );
}
