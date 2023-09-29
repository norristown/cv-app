import { useState } from "react";

export default function App() {
  const [inputs, setInputs] = useState({
    first: "",
    last: "",
    title: "",
    address: "",
    number: "",
    email: "",
  });
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  }
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Form onHandleChange={handleChange} />
        <FormPreview inputs={inputs} />
      </div>
    </div>
  );
}

function Header() {
  return <h1 className="main-header">CV Generator</h1>;
}
function FormPreview({ inputs }) {
  return (
    <div className="main-preview">
      <h1>Heading</h1>
      <div className="sub-preview">
        <div className="description">
          <div>{inputs.first}</div>
          <div>{inputs.last}</div>
          <div>{inputs.title}</div>
          <div>{inputs.address}</div>
          <div>{inputs.number}</div>
          <div>{inputs.email}</div>
        </div>
        <div className="experience"></div>
        <div className="education"></div>
      </div>
      <div className="personal-preview">
        <div className="avatar">
          <img src="" alt="avatar" />
        </div>
        <div className="personal-details">
          <div>Address</div>
          <div>Phone Number</div>
          <div>Email</div>
        </div>
      </div>
    </div>
  );
}
function Input({ name, placeholder, onChange }) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      <br />
    </>
  );
}
function Form({ onHandleChange }) {
  return (
    <form>
      <div className="personal-info">
        <h3>Personal Information</h3>
        <Input
          placeholder="First Name"
          name="first"
          onChange={onHandleChange}
        />
        <Input placeholder="Last Name" name="last" onChange={onHandleChange} />
        <Input placeholder="Title" name="title" onChange={onHandleChange} />
        <Input placeholder="Address" name="address" onChange={onHandleChange} />
        <Input
          placeholder="Phone Number"
          name="number"
          onChange={onHandleChange}
        />
        <Input placeholder="Email" name="email" onChange={onHandleChange} />
      </div>
      <div className="experience">
        <h3>Work History</h3>
        <Input placeholder="Job Title" />
        <Input placeholder="Company" />
        <Input placeholder="Address" />
        <Input placeholder="From" />
        <Input placeholder="Until" />
      </div>
      <div>
        <button>Delete</button>
        <button>Add</button>
      </div>
      <div className="education">
        <h3>Education</h3>
        <Input placeholder="College/University" />
        <Input placeholder="City" />
        <Input placeholder="Degree" />
        <Input placeholder="From" />
        <Input placeholder="Until" />
      </div>
    </form>
  );
}

function ClearForm() {}

function Button() {}
