import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { renderInput } from "../utils/helperFunctions";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";
const StyledDiv = styled.div`
  margin-top: 30vh;
  padding: 50px;
  border: solid;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  min-width:400px;
`;
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    const url = "https://frebi.willandskill.eu/api-token-auth/";
    const payload = { email, password };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json()
        
      )
      .then((data) => {
        const token = data.token;
        localStorage.setItem("smallCompany", token);
        navigate("/home");
      })
      ;
  }

  return (
    <div className="row d-flex justify-content-center">
      <StyledDiv className="bg-white col-3">
        <h1>Login page</h1>
        <form onSubmit={handleOnSubmit}>
          {renderInput("text", email, setEmail, "Email Address")}

          {renderInput("password", password, setPassword, "Password")}
          <br />
          <Button wide padding type="submit">
            Login
          </Button>
        </form>
        <Link to="/create/account"> Create New Account</Link>
      </StyledDiv>
    </div>
  );
}
