import { useState } from "react";

export default function App() {
  const [preview, setPreview] = useState("");
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Form />
        <FormPreview />
      </div>
    </div>
  );
}

function Header() {
  return <h1 className="main-header">CV Generator</h1>;
}
function FormPreview() {
  return (
    <div className="main-preview">
      <h1>FormPreview</h1>
      <div className="sub-preview">
        <div className="description"></div>
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

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  function Input({ placeholder }) {
    return (
      <>
        <input type="text" placeholder={placeholder} />
        <br />
      </>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="personal-info">
        <h3>Personal Information</h3>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Title" />
        <Input placeholder="Address" />
        <Input placeholder="Phone Number" />
        <Input placeholder="Address" />
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
