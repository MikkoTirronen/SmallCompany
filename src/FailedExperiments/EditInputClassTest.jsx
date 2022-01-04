
import React from 'react';
import ReactDOM from 'react-dom' 

class EditInputClassTest extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          value: "",
          id: 1,
          type: "",
          placeholder: "",
          pattern: "",
          title: "",
          patchValue: ""
      };

    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
          [name]: value
      })
  }
  handleChange(event) {
    alert("a name was submitted: " + this.state.value);
    event.preventDefault();
    }

    handleSubmit(e) {
         e.preventDefault();
         const url = `https://frebi.willandskill.eu/api/v1/customers/${this.state.id}/`;
         const payload = {};
         payload[`${this.state.patchValue}`] = this.state.value;
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
    }

  render() {
      return (
        <>
      <form onSubmit={this.handleSubmit}>
        <label>
          {this.state.patchValue.toUpperCase()}
          <br></br>
          <input
            id={this.state.id}
            type={this.state.type}
            value={this.state.value}
            onChange={this.handleInputChange}
            placeholder={this.state.placeholder}
            pattern={this.state.pattern}
            title={this.state.title}
            />
        </label>
        <button type="submit">Edit</button>
      </form>
        </>
    );
  }
}
ReactDOM.render(
    <EditInputClassTest />,
    document.getElementById("root")
);
