export function Example({
  onHandleChange,
  onHandleWork,
  exampleInputs,
  exampleWork,
  onSetDescription,
}) {
  return (
    <button
      className="example-button"
      onClick={() => {
        onHandleChange(exampleInputs);
        onHandleWork(exampleWork);
        onSetDescription(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis pellentesque turpis, cursus semper justo luctus a. Nulla dictum, mauris sed ornare imperdiet, sapien justo commodo elit, sed pellentesque urna. "
        );
      }}
    >
      Generate Example
    </button>
  );
}
