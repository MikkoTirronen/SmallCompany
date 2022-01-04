import React, { Children } from "react";
import { useNavigate } from "react-router-dom";
import EditInputClassTest from "../FailedExperiments/EditInputClassTest"
export default function EditInput({
  id,
  patchValue,
  type,
  value,
  setValue,
  placeholder,
  pattern,
  title,
}) {
  const navigate = useNavigate();

  function handleOnClick(e) {
    e.preventDefault();
    const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`;
    const payload = {};
    payload[`${patchValue}`] = value;
    const token = localStorage.getItem("smallCompany");

    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(navigate("/home"));
  }

  return (
    <div className ="form-group">
      <form onSubmit={handleOnClick}>
        <label>
          {patchValue.toUpperCase()}
          <br></br>
        
        <input
          id={id}
            type={type}
            className="form-control"
          value={value ? value: undefined}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          pattern={pattern}
          title={title}
        /></label>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}
