import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateData } from "../utils/helperFunctions";
import { CustomerList } from "../App";
import EditInput from "./EditInput";
import styled from "styled-components";
import Button from "./Button";
import Footer from "./Footer";

const StyledContainer = styled.div`
  background-color:white;
  display:d-flex;
  padding-left: 15vw;
  width: 50vw;
  margin-left: 250px;
  margin-top: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 700;
  border: solid;
  min-width: 650px;
`
const StyledText = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export default function Detail({ index }) {
  const { setCustomerList } = useContext(CustomerList);
  const [detail, setDetail] = useState(null);
  const [name, setName] = useState("");
  const [id, setId] = useState(null);
  const [email, setEmail] = useState(null);
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${id}`;
    const token = localStorage.getItem("smallCompany");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    fetch(url, {
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setDetail(data.results[index]);
        setId(data.results[index].id);
      });
  }, []);

  function deleteCustomer(e) {
    e.preventDefault();
    const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`;
    const payload = { id };
    const token = localStorage.getItem("smallCompany");

    fetch(url, {
      method: "DELETE",
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
      <>
    <div>
      {detail ? (
        <div className="container-fluid">
          <StyledContainer className="">
            <EditInput
              id={id}
              type={"text"}
              patchValue="name"
              value={name}
              setValue={setName}
              placeholder={detail.name}
            />
            <EditInput
              id={id}
              type={"text"}
              patchValue="email"
              value={email}
              setValue={setEmail}
              placeholder={detail.email}
            />
            <EditInput
              id={id}
              type={"text"}
              patchValue="phoneNumber"
              value={phoneNumber}
              setValue={setPhoneNumber}
              placeholder={detail.phoneNumber}
            />
            <EditInput
              id={id}
              type={"text"}
              patchValue="website"
              value={website}
              setValue={setWebsite}
              placeholder={detail.website}
            />
            <EditInput
              id={id}
              type={"text"}
              patchValue="vatNr"
              value={vatNr}
              setValue={setVatNr}
              placeholder={detail.vatNr}
              pattern={"(SE).{10}"}
              title={"Input must Start with SE followed by 10 numbers."}
            />
            <EditInput
              id={id}
              type={"text"}
              patchValue="organisationNr"
              value={organisationNr}
              setValue={setOrganisationNr}
              placeholder={detail.organisationNr}
            />
            <EditInput
              id={id}
              type={"text"}
              patchValue="reference"
              value={reference}
              setValue={setReference}
              placeholder={detail.reference}
            />
            <EditInput
              id={id}
              type={"text"}
              patchValue="paymentTerm"
              value={paymentTerm}
              setValue={setPaymentTerm}
              placeholder={detail.paymentTerm}
            />
            <Button styledDelete onClick={deleteCustomer}>
              Delete Customer
            </Button><br/>
            <Link to="/home"><StyledText> Back to Home</StyledText></Link>
          </StyledContainer>
        </div>
      ) : (
        "Page Not Found!"
      )}
      
    </div>
    <Footer></Footer>
    </>
  );
}
