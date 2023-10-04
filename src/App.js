import { useState } from "react";
import { Header } from "./components/Header";
import { FormPreview } from "./components/FormPreview";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";

export default function App() {
  const clearInputs = {
    id: Date.now(),
    first: "",
    last: "",
    title: "",
    address: "",
    number: "",
    email: "",
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

  const [inputs, setInputs] = useState(clearInputs);
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
          inputs={inputs}
        />
        <FormPreview inputs={inputs} work={work} description={description} />
      </div>
      <Footer />
    </div>
  );
}
