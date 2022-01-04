import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { renderInput } from '../utils/helperFunctions';

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
           
           //navigate("/home");
         });
     }

     return (
       <div>
         <h1>Create New Account</h1>
         <form onSubmit={handleOnSubmit}>
           {renderInput("text", firstName, setFirstName, "First Name")}
           
           {renderInput("text", lastName, setLastName, "Last Name")}
           <br />
           {renderInput(
             "text",
             organisationKind,
             setOrganisationKind,
             "Kind of Organisation"
           )}
           <br />
           <br />
           {renderInput("text", email, setEmail, "Email Address")}
           {/* <input
          type="text"
                  value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        /> */}
           {renderInput("password", password, setPassword, "Password")}

           <button type="submit">Create New Account</button>
         </form>
       </div>
     );
}
