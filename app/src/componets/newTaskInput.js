import { useState } from "react";
import Header from "./header";

function NewTaskInput(props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") return;
    if (value == " ") return;

    props.addTask(value);

    setValue("");
  };

  return (
    <>
      <input
        onSubmit={handleSubmit}
        type="text"
        className="input"
        value={value}
        placeholder="Insert Tasks Here..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit} id={"colorBlue"}>
        Submit
      </button>
    </>
  );
}

export default NewTaskInput;
