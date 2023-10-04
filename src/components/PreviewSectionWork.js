export function PreviewSectionWork({ id, work }) {
  return (
    <div className="work-preview-details">
      <div className="work-preview-left">
        {work.find((x) => x.id === id).from} -{" "}
        {work.find((x) => x.id === id).until}
      </div>
      <div className="work-preview-right">
        <p className="work-preview-title">
          {work.find((x) => x.id === id).title}
        </p>
        <div>{work.find((x) => x.id === id).company}</div>
        <div>{work.find((x) => x.id === id).address}</div>
      </div>
    </div>
  );
}
