import React from "react";
import { Link } from "react-router-dom";
import { renderInput } from "../utils/helperFunctions";
import Button from "./Button";
export default function CreateCustomerForm({
  name,
    setName,
  email,setEmail,
  organisationNr,
  setOrganisationNr,
  vatNr,
  setVatNr,
  reference,
  setReference,
  website,
  setWebsite,
  paymentTerm,
  setPaymentTerm,
  phoneNumber,
    setPhoneNumber,
  handleOnSubmit
}) {
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <br></br>
          {renderInput("text", name, setName, "Name", "name")}
        </div>
        <div className="form-group">
          <label htmlFor="organisationNumber">Organisation Number:</label>
          <br></br>
          {renderInput(
            "text",
            organisationNr,
            setOrganisationNr,
            "Organisation number",
            "organisationNumber"
          )}
        </div>

        <div className="form-group">
          <label htmlFor="vatNumber">Vat Registry Number:</label>
          <br />

          {
            <input
              type="text"
              value={vatNr}
              onChange={(e) => setVatNr(e.target.value)}
              placeholder="Vat Number"
              pattern="(SE).{10}"
              title="Must include SE followed by 10 numbers"
              id="vatNumber"
              style={{ marginTop: 10 + "px", width: 300 + "px" }}
            />
          }
        </div>
        <div className="form-group">
          <label htmlFor="reference"> Reference: </label>
          <br></br>
          {renderInput(
            "text",
            reference,
            setReference,
            "Reference",
            "reference"
          )}
        </div>
        <div className="form-group">
          <label htmlFor="paymentTerm">Payment Term: </label>
          <br></br>
          {renderInput(
            "text",
            paymentTerm,
            setPaymentTerm,
            "Payment Term",
            "paymentTerm"
          )}
        </div>
        <div className="form-group">
          <label htmlFor="website">Website Address: </label>
          <br></br>
          {renderInput("text", website, setWebsite, "Website URL", "website")}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <br></br>
          {renderInput("text", email, setEmail, "Email Address", "email")}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number: </label>
          <br></br>
          {renderInput(
            "text",
            phoneNumber,
            setPhoneNumber,
            "Phone Number",
            "phoneNumber"
          )}
        </div>
        <Button margin padding type="submit">
          Create Customer
        </Button>
      </form>
      <Link to="/home">Back to Home</Link>
    </div>
  );
}
