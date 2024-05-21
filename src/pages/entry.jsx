import Header from "../Components/header/Header";
import classes from "./entry.module.css";
import { ReactTyped } from "react-typed";
import Button from "../Components/header/buttons";
import { useNavigate } from "react-router-dom";

export default function Entry() {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate("/home");
    // alert(`patithike to ${event.target.value}`);
  };
  return (
    <>
      {/* <Header /> */}
      <h1 className={classes.hi}>
        <ReactTyped
          strings={["Hey there", "Μy name is Rafael and this is my Portfolio"]}
          typeSpeed={100}
          loop
          backSpeed={30}
          cursorChar=""
          showCursor={true}
        />
      </h1>
      <div>
        <form action="" className={classes.form}>
          <div className={classes.container}>
            <Button value="en" type={classes.en} onClick={handleClick} />
            <Button value="gr" type={classes.gr} onClick={handleClick} />
            <Button value="de" type={classes.de} onClick={handleClick} />
          </div>
          <label className={classes.choose}>
            (Choose language and get started )
          </label>
          <button
            type="submit"
            className={classes.submit}
            onClick={handleClick}
          >
            Get started
          </button>
        </form>
      </div>
    </>
  );
}
