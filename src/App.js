import { useState } from "react";

export default function App() {
  const [inputs, setInputs] = useState({});
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  }

  const [work, setWork] = useState([]);
  function handleWork(e) {
    const name = e.target.name;
    const value = e.target.value;
    setWork({ ...work, [name]: value });
  }

  return (
    <div className="app">
      <Header />
      <div className="main">
        <Form onHandleChange={handleChange} onAddWork={handleWork} />
        <FormPreview inputs={inputs} work={work} />
      </div>
    </div>
  );
}

function Header() {
  return <h1 className="main-header">CV Generator</h1>;
}
function FormPreview({ inputs, work }) {
  return (
    <div className="main-preview">
      <header>
        <h1 className="preview-header">
          {inputs.first} {inputs.last}
        </h1>
        <h2>{inputs.title}</h2>
      </header>

      <div className="sub-preview">
        <div className="description">
          <div>
            <h3>Description</h3>
          </div>
          <div>{inputs.title}</div>
          <div>{inputs.address}</div>
          <div>{inputs.number}</div>
          <div>{inputs.email}</div>
        </div>
        <div className="experience">
          <h3>Experience</h3>
          <div>{work.title}</div>
          <div>{work.company}</div>
          <div>{work.address}</div>

          <div>
            {work.from} - {work.until}
          </div>
        </div>
        <div className="education">
          <h3>Education</h3>
          <p>I guess this hsould be a section tag</p>
        </div>
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
function Form({ onHandleChange, onAddWork }) {
  return (
    <form className="inputField">
      <div className="personal-info" id="input">
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
      <div className="experience" id="input">
        <h3>Work History</h3>
        <Input placeholder="Job Title" name="title" onChange={onAddWork} />
        <Input placeholder="Company" name="company" onChange={onAddWork} />
        <Input placeholder="Address" name="address" onChange={onAddWork} />
        <Input placeholder="From" name="from" onChange={onAddWork} />
        <Input placeholder="Until" name="until" onChange={onAddWork} />
        <div className="buttons">
          <button>Delete</button>
          <button>Add</button>
        </div>
      </div>

      <div className="education" id="input">
        <h3>Education</h3>
        <Input placeholder="College/University" />
        <Input placeholder="City" />
        <Input placeholder="Degree" />
        <Input placeholder="From" />
        <Input placeholder="Until" />
        <div className="buttons">
          <button>Delete</button>
          <button>Add</button>
        </div>
      </div>
    </form>
  );
}

function ClearForm() {}

function Button() {}
