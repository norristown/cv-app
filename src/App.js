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
        id: Date.now(),
        name: "",
        city: "",
        degree: "",
        from: "",
        until: "",
      },
    ],
  });

  const [description, setDescription] = useState("");

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

  function deleteWork(id) {
    setWork((prev) => {
      console.log("delete");
      const newWork = prev.workHistory.filter((item) => item.id !== id);
      return { ...prev, workHistory: [...newWork] };
    });
  }

  function handleEducation(e, id) {
    const name = e.target.name;
    const value = e.target.value;
    setWork((prev) => {
      const newEducation = prev.education.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }
        return item;
      });
      return { ...prev, education: [...newEducation] };
    });
  }

  function addEducation() {
    setWork((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { id: Date.now(), name: "", city: "", degree: "", from: "", until: "" },
      ],
    }));
  }

  function deleteEducation(id) {
    setWork((prev) => {
      const newEducation = prev.education.filter((item) => item.id !== id);
      return { ...prev, education: [...newEducation] };
    });
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
          onDeleteWork={deleteWork}
          onHandleEducation={handleEducation}
          onAddEducation={addEducation}
          onDeleteEducation={deleteEducation}
          description={description}
          onSetDescription={setDescription}
        />
        <FormPreview inputs={inputs} work={work} description={description} />
      </div>
    </div>
  );
}

function Header() {
  return <h1 className="main-header">CV Generator</h1>;
}
function PreviewSectionWork({ id, work }) {
  return (
    <div>
      <div>{work.find((x) => x.id === id).title}</div>
      <div>{work.find((x) => x.id === id).company}</div>
      <div>{work.find((x) => x.id === id).address}</div>

      <div>
        {work.find((x) => x.id === id).from} -{" "}
        {work.find((x) => x.id === id).until}
      </div>
    </div>
  );
}
function PreviewSectionEducation({ id, work }) {
  return (
    <div>
      <div>{work.find((x) => x.id === id).name}</div>
      <div>{work.find((x) => x.id === id).city}</div>
      <div>{work.find((x) => x.id === id).degree}</div>

      <div>
        {work.find((x) => x.id === id).from} -{" "}
        {work.find((x) => x.id === id).until}
      </div>
    </div>
  );
}
function FormPreview({ inputs, work, description }) {
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
            <p>{description}</p>
          </div>
          <div className="personal-details">
            <h3>Personal Details</h3>
            <div>{inputs.title}</div>
            <div>{inputs.address}</div>
            <div>{inputs.number}</div>
            <div>{inputs.email}</div>
          </div>
        </div>
        <div className="experience">
          <h3>Experience</h3>
          <div>
            {work.workHistory.map((x) => (
              <PreviewSectionWork
                key={x.id}
                id={x.id}
                work={work.workHistory}
              />
            ))}
          </div>
        </div>
        <div className="education">
          <h3>Education</h3>
          <div>
            {work.education.map((x) => (
              <PreviewSectionEducation
                key={x.id}
                id={x.id}
                work={work.education}
              />
            ))}
          </div>
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
function WorkSection({ onHandleWork, work, onAddWork, id, onDeleteWork }) {
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
        <button onClick={() => onDeleteWork(id)}>Delete</button>
        <button onClick={onAddWork}>Add</button>
      </div>
    </div>
  );
}

function EducationSection({
  onHandleEducation,
  onAddEducation,
  onDeleteEducation,
  work,
  id,
}) {
  return (
    <div>
      <Input
        placeholder="College/University"
        name="name"
        onChange={(e) => onHandleEducation(e, id)}
        value={work.education.find((x) => x.id === id).name}
      />
      <Input
        placeholder="City"
        name="city"
        onChange={(e) => onHandleEducation(e, id)}
        value={work.education.find((x) => x.id === id).city}
      />
      <Input
        placeholder="Degree"
        name="degree"
        onChange={(e) => onHandleEducation(e, id)}
        value={work.education.find((x) => x.id === id).degree}
      />
      <Input
        placeholder="From"
        name="from"
        onChange={(e) => onHandleEducation(e, id)}
        value={work.education.find((x) => x.id === id).from}
      />
      <Input
        placeholder="Until"
        name="until"
        onChange={(e) => onHandleEducation(e, id)}
        value={work.education.find((x) => x.id === id).until}
      />
      <div className="buttons">
        <button onClick={() => onDeleteEducation(id)}>Delete</button>
        <button onClick={onAddEducation}>Add</button>
      </div>
    </div>
  );
}
function Form({
  onHandleChange,
  onHandleWork,
  onAddWork,
  work,
  onDeleteWork,
  onHandleEducation,
  onAddEducation,
  onDeleteEducation,
  onSetDescription,
  description,
}) {
  return (
    <div className="inputField">
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
        <textarea
          value={description}
          onChange={(e) => onSetDescription(e.target.value)}
        ></textarea>
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
              onDeleteWork={onDeleteWork}
            />
          ))}
        </div>
      </div>

      <div className="education" id="input">
        <h3>Education</h3>
        {work.education.map((x) => (
          <EducationSection
            key={x.id}
            id={x.id}
            onHandleEducation={onHandleEducation}
            onAddEducation={onAddEducation}
            onDeleteEducation={onDeleteEducation}
            work={work}
          />
        ))}
      </div>
    </div>
  );
}

function ClearForm() {}

function Button() {}
