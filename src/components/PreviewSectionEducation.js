export function PreviewSectionEducation({ id, work }) {
  return (
    <div className="school-preview-details">
      <div className="school-preview-left">
        {work.find((x) => x.id === id).from} -{" "}
        {work.find((x) => x.id === id).until}
      </div>
      <div className="school-preview-right">
        <div className="school-preview-name">
          {work.find((x) => x.id === id).name}
        </div>
        <div>{work.find((x) => x.id === id).city}</div>
        <div>{work.find((x) => x.id === id).degree}</div>
      </div>
    </div>
  );
}
