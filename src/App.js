import { useState } from "react";

export default function App() {
  const clearInputs = {
    id: Date.now(),
    title: "",
    company: "",
    address: "",
    from: "",
    until: "",
  };
  const clearWork = {
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
  };
  const exampleInputs = {
    first: "John",
    last: "Doe",
    title: "Full Stack Developer",
    address: "88 State Street, Smalltown IN 19191",
    number: "888-888-8888",
    email: "email@gmail.com",
  };
  const exampleWork = {
    workHistory: [
      {
        id: Date.now(),
        title: "Job 1",
        company: "Company 1",
        address: "99 Address Way Philadelphia, PA 19000",
        from: "2012",
        until: "Current",
      },
    ],
    education: [
      {
        id: Date.now(),
        name: "Uni University",
        city: "Ithaca, NY 90000",
        degree: "Computer Science",
        from: "2008",
        until: "2012",
      },
    ],
  };

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
    if (work.workHistory.length !== 1) {
      setWork((prev) => {
        const newWork = prev.workHistory.filter((item) => item.id !== id);
        return { ...prev, workHistory: [...newWork] };
      });
    } else {
      setWork((prev) => {
        return {
          ...prev,
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
        };
      });
    }
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
    if (work.education.length !== 1) {
      setWork((prev) => {
        const newEducation = prev.education.filter((item) => item.id !== id);
        return { ...prev, education: [...newEducation] };
      });
    } else {
      setWork((prev) => {
        return {
          ...prev,
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
        };
      });
    }
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
          onSetInput={setInputs}
          onSetWork={setWork}
          exampleInputs={exampleInputs}
          exampleWork={exampleWork}
          clearWork={clearWork}
          clearInputs={clearInputs}
        />
        <FormPreview inputs={inputs} work={work} description={description} />
      </div>
      <Footer />
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
      <div className="header-container">
        <h1 className="preview-header">
          {inputs.first} {inputs.last}
        </h1>{" "}
        <h2>{inputs.title}</h2>
      </div>

      <div className="preview-container">
        <div className="preview-left">
          <div>
            <h3>Description</h3>
            <p>{description}</p>
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
        <div className="personal-right">
          <div className="personal-details">
            <div className="avatar">
              <img
                className="avatar"
                src={require("./astronaut.png")}
                alt="avatar"
              />
            </div>
            <h3>Personal Details</h3>
            <div>{inputs.address}</div>
            <div>{inputs.number}</div>
            <div>{inputs.email}</div>
          </div>
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
    <>
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
    </>
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
    <>
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
    </>
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
  onSetInput,
  onSetWork,
  exampleInputs,
  exampleWork,
  clearWork,
  clearInputs,
}) {
  return (
    <div className="main-left">
      <div className="form">
        <div className="personal-info">
          <h3>Personal Information</h3>
          <div className="input-field">
            <Input
              placeholder="First Name"
              name="first"
              onChange={onHandleChange}
            />
            <Input
              placeholder="Last Name"
              name="last"
              onChange={onHandleChange}
            />
            <Input placeholder="Title" name="title" onChange={onHandleChange} />
            <Input
              placeholder="Address"
              name="address"
              onChange={onHandleChange}
            />
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
        </div>
        <div className="experience">
          <h3>Work History</h3>
          <div className="input-field">
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

        <div className="education">
          <h3>Education</h3>
          <div className="input-field">
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
        <Example
          onHandleChange={onSetInput}
          onHandleWork={onSetWork}
          exampleInputs={exampleInputs}
          exampleWork={exampleWork}
        />
        <ClearForm
          onSetInput={onSetInput}
          onSetWork={onSetWork}
          clearInputs={clearInputs}
          clearWork={clearWork}
        />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <a
        href="https://www.flaticon.com/free-icons/astronaut"
        title="astronaut icons"
      >
        Astronaut icons created by Freepik - Flaticon
      </a>
      Kevin Jarvis
    </footer>
  );
}

function ClearForm({ onSetInput, onSetWork, clearInputs, clearWork }) {
  return (
    <button
      onClick={() => {
        onSetInput(clearInputs);
        onSetWork(clearWork);
      }}
    >
      Reset Form
    </button>
  );
}

function Example({ onHandleChange, onHandleWork, exampleInputs, exampleWork }) {
  return (
    <button
      onClick={() => {
        onHandleChange(exampleInputs);
        onHandleWork(exampleWork);
      }}
    >
      Generate Example
    </button>
  );
}
