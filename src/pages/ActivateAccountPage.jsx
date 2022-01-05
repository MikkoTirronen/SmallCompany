import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
const StyledDiv = styled.div`
 margin-top: 40vh;
 padding: 50px;
 border: solid;
 font-size: 20px;
 font-weight: 700;
 text-align: center;
`
export default function ActivateAccountPage() {
    

    const queryParams = new URLSearchParams(window.location.search)
    const uid = queryParams.get("uid")
    const token = queryParams.get("token")
    const navigate = useNavigate()

    function handleOnSubmit(e) {
      e.preventDefault();
      const url = "https://frebi.willandskill.eu/auth/users/activate/";
      const payload = { uid, token };
        console.log(payload)
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          navigate("/");
        });
    }
    return (
      <div className="row dflex justify-content-center">
          <StyledDiv className="col-3 bg-white">
            
              <p>Activate My Account</p>
              <Button padding onClick={handleOnSubmit}>Click here to Activate Account</Button>
          </StyledDiv>
        </div>
    )
}
