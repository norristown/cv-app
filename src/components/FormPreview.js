import { PreviewSectionWork } from "./PreviewSectionWork";
import { PreviewSectionEducation } from "./PreviewSectionEducation";

export function FormPreview({ inputs, work, description }) {
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
            <hr></hr>
            <p>{description}</p>
          </div>
          <div className="experience">
            <h3>Experience</h3>
            <hr></hr>
            <div className="work">
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
            <hr></hr>
            <div className="school">
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

        <div className="personal-details">
          <div className="avatar">
            <img
              className="avatar"
              src={require("./astronaut.png")}
              alt="avatar"
            />
          </div>
          <h3>Personal Details</h3>
          <hr></hr>
          <div className="details">
            <h4>Address</h4>
            <div>{inputs.address}</div>
          </div>
          <div className="details">
            <h4>Phone Number</h4>
            <div>{inputs.number}</div>
          </div>
          <div className="details">
            <h4>Email</h4>
            <div>{inputs.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
