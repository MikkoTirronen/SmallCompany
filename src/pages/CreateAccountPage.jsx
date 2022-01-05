import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { renderInput} from '../utils/helperFunctions';
import styled from 'styled-components';
import Button from '../components/Button';
const StyledDiv = styled.div`
  margin-top: 30vh;
  padding: 50px;
  border: solid;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  min-width: 400px;
`;

export default function CreateAccountPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const[organisationKind,setOrganisationKind] = useState("")
     const navigate = useNavigate();

     function handleOnSubmit(e) {
       e.preventDefault();
       const url = "https://frebi.willandskill.eu/auth/users/";
       const payload = { email, password,firstName,lastName,organisationKind};

       fetch(url, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(payload),
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data)
           navigate("/");
         }).catch(error=> {console.log(error)});
     }

     return (

       <div className="row d-flex justify-content-center">
      <StyledDiv className="bg-white col-3">
         <h2>Create New Account</h2>
         <form onSubmit={handleOnSubmit}>
           {renderInput("text", firstName, setFirstName, "First Name")}
           
           {renderInput("text", lastName, setLastName, "Last Name")}
           
           {renderInput(
             "text",
             organisationKind,
             setOrganisationKind,
             "Kind of Organisation"
           )}
           <br />
           
           {renderInput("text", email, setEmail, "Email Address")}
           {renderInput("password", password, setPassword, "Password")}
          <Button margin padding type="submit">
            Create New Account
          </Button>
        </form>
      </StyledDiv>
    </div>
     );
}
