import { Input } from "./Input";

export function EducationSection({
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
        <button className="delete" onClick={() => onDeleteEducation(id)}>
          Delete
        </button>
        <button className="add" onClick={onAddEducation}>
          Add
        </button>
      </div>
    </>
  );
}
