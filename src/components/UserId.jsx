import React, { useContext} from "react";
import { LoggedInUser } from "../App";
import styled from "styled-components";

const StyledDiv = styled.div`
    color:white;
    font-size: 15px;
    font-weight: 500;
    width:100vw;
    margin-left 450px;
`

export default function UserId() {
 
  const { currentUser} = useContext(LoggedInUser);
  

 
  return (
    <StyledDiv>
      {LoggedInUser ?
        
        <>
          
        <div key={currentUser.id}>
            <p>
              Logged in as: <br />
              {`${currentUser.firstName} ${currentUser.lastName}`}<br/>
              {currentUser.email}
            </p>
        </div>
        </>
        :"Not Found"
      }
      
    </StyledDiv>
  );
}
