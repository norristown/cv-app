import { Input } from "./Input";

export function WorkSection({
  onHandleWork,
  work,
  onAddWork,
  id,
  onDeleteWork,
}) {
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
        <button className="delete" onClick={() => onDeleteWork(id)}>
          Delete
        </button>
        <button className="add" onClick={onAddWork}>Add</button>
      </div>
    </>
  );
}
