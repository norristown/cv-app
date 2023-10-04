export function ClearForm({
  onSetInput,
  onSetWork,
  clearInputs,
  clearWork,
  onSetDescription,
}) {
  return (
    <button
      className="clear-button"
      onClick={() => {
        onSetInput(clearInputs);
        onSetWork(clearWork);
        onSetDescription("");
      }}
    >
      Reset Form
    </button>
  );
}
