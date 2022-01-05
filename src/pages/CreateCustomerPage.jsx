import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerList } from "../App";
import CreateCustomerForm from "../components/CreateCustomerForm";
import { updateData } from "../utils/helperFunctions";
import styled from "styled-components";
import Banner from "../components/Banner";
import Footer from "../components/Footer";


const StyledContainer = styled.div`
background-color:white;
text-align: center;
width: 40vw;
height: 73vh;
border:solid;
border-color: black;
font-size: 20px;
font-weight: 700;
line-height: 30px;
padding-top: 25px;
margin-top:10px;
min-width: 700px
`
export default function CreateCustomerPage() {
  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const { setCustomerList } = useContext(CustomerList);

  function handleOnSubmit(e) {
    e.preventDefault();
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const payload = {
      name,
      organisationNr,
      vatNr,
      reference,
      paymentTerm,
      website,
      email,
      phoneNumber,
    };
    const token = localStorage.getItem("smallCompany");

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(updateData(setCustomerList))
      .then(navigate("/home"));
  }
  return (
    <div className="row d-flex justify-content-center p-0 g-0">
        <Banner textWhite>Create Customer</Banner>
      <StyledContainer>
        
          <CreateCustomerForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            vatNr={vatNr}
            setVatNr={setVatNr}
            organisationNr={organisationNr}
            setOrganisationNr={setOrganisationNr}
            reference={reference}
            setReference={setReference}
            website={website}
            setWebsite={setWebsite}
            paymentTerm={paymentTerm}
            setPaymentTerm={setPaymentTerm}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            handleOnSubmit={handleOnSubmit}
        />
          
            </StyledContainer>
          {/* <form onSubmit={handleOnSubmit} >
          <div className="form-group">
          <label htmlFor="name">Name: </label>
          <br></br>
          {renderInput("text", name, setName, "Name", "name")}
          </div>
          <div className="form-group">
          <label htmlFor="organisationNumber">Organisation Number:</label>
          {renderInput("text", organisationNr, setOrganisationNr, "Organisation number", "organisationNumber")}
          </div>
          
          <div className="form-group">
          <label htmlFor="vatNumber">Vat Registry Number:</label>
          {<input
            type="text"
            value={vatNr}
            onChange={(e) => setVatNr(e.target.value)}
            placeholder="Vat Number"
            pattern="(SE).{10}"
            title="Must include SE followed by 10 numbers"
            id ="vatNumber"
            /> }
            </div>
            <div className="form-group">
            <label htmlFor="reference"> Reference: </label>
            {renderInput("text", reference, setReference, "Reference", "reference")}
            </div>
            <div className="form-group">
            <label htmlFor="Payment Term: "></label>
            {renderInput("text", paymentTerm, setPaymentTerm, "Payment Term", "paymentTerm")}
            </div>
            <div className="form-group">
            <label htmlFor="website">Website Address: </label>
            {renderInput("text", website, setWebsite, "Website URL", "website")}
            </div>
            <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            {renderInput("text", email, setEmail, "Email Address", "email")}
            </div>
            <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number: </label>
            {renderInput("text", phoneNumber, setPhoneNumber, "Phone Number", "phoneNumber")}
            </div>
            <button type="submit">Create Customer</button>
          </form> */}
          <Footer/>
      </div>
  );
}
