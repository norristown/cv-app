import { Input } from "./Input";
import { WorkSection } from "./WorkSection";
import { EducationSection } from "./EducationSection";
import { Example } from "./Example";
import { ClearForm } from "./ClearForm";

export function Form({
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
        <div className="buttons">
          <Example
            onHandleChange={onSetInput}
            onHandleWork={onSetWork}
            exampleInputs={exampleInputs}
            exampleWork={exampleWork}
            onSetDescription={onSetDescription}
          />
          <ClearForm
            onSetInput={onSetInput}
            onSetWork={onSetWork}
            clearInputs={clearInputs}
            clearWork={clearWork}
            onSetDescription={onSetDescription}
          />
        </div>
      </div>
    </div>
  );
}
