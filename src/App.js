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

  const [work, setWork] = useState({
    workHistory: [
      {
        id: Date.now(),
        title: "",
        company: "",
        address: "",
        from: "",
        until: "",
      },
    ],
    education: [
      {
        title: "",
        city: "",
        degree: "",
        from: "",
        until: "",
      },
    ],
  });
  function handleWork(e, id) {
    const name = e.target.name;
    const value = e.target.value;
    setWork((prev) => {
      const newWork = prev.workHistory.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }
        return item;
      });
      return { ...prev, workHistory: [...newWork] };
    });
  }

  function addWork() {
    setWork((prev) => ({
      ...prev,
      workHistory: [
        ...prev.workHistory,
        {
          id: Date.now(),
          title: "",
          company: "",
          address: "",
          from: "",
          until: "",
        },
      ],
    }));
  }

  return (
    <div className="app">
      <Header />
      <div className="main">
        <Form
          onHandleChange={handleChange}
          onHandleWork={handleWork}
          work={work}
          onAddWork={addWork}
        />
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
          <div>{work.workHistory[0].title}</div>
          <div>{work.workHistory[0].company}</div>
          <div>{work.workHistory[0].address}</div>

          <div>
            {work.workHistory[0].from} - {work.workHistory[0].until}
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
function Input({ name, placeholder, onChange, value, id }) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        id={id}
      />
      <br />
    </>
  );
}
function WorkSection({ onHandleWork, work, onAddWork, id }) {
  return (
    <div>
      <Input
        placeholder="Job Title"
        name="title"
        onChange={(e) => onHandleWork(e, id)}
        value={work.workHistory.find((x) => x.id === id).title}
      />
      <Input
        placeholder="Company"
        name="company"
        onChange={(e) => onHandleWork(e, id)}
        value={work.workHistory.find((x) => x.id === id).company}
      />
      <Input
        placeholder="Address"
        name="address"
        onChange={(e) => onHandleWork(e, id)}
        value={work.workHistory.find((x) => x.id === id).address}
      />
      <Input
        placeholder="From"
        name="from"
        onChange={(e) => onHandleWork(e, id)}
        value={work.workHistory.find((x) => x.id === id).from}
      />
      <Input
        placeholder="Until"
        name="until"
        onChange={(e) => onHandleWork(e, id)}
        value={work.workHistory.find((x) => x.id === id).until}
      />
      <div className="buttons">
        <button>Delete</button>
        <button onClick={onAddWork}>Add</button>
      </div>
    </div>
  );
}
function Form({ onHandleChange, onHandleWork, onAddWork, work }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="inputField" onSubmit={handleSubmit}>
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
        <div>
          {work.workHistory.map((x) => (
            <WorkSection
              key={x.id}
              id={x.id}
              onHandleWork={onHandleWork}
              work={work}
              onAddWork={onAddWork}
            />
          ))}
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
