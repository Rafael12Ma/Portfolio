import Simon_game from "../Projects/Simon_game/SimonGame";
import "./content.module.css";
import { useRef, useState } from "react";

export default function Content() {
  const name = useRef();
  const [enteredName, setEnteredName] = useState("");

  function handleCLick() {
    setEnteredName(name.current.value);
    name.current.value = "";
  }

  return (
    <>
      <section>
        <h2>My projects</h2>
        <h2>{enteredName ? `Hallo ${enteredName}` : ""}</h2>
        <label>Sign in</label>
        <input placeholder="Enter your name" type="text" ref={name} />
        <button onClick={handleCLick}>Enter</button>
      </section>
      <section>
        <Simon_game />
      </section>
    </>
  );
}
