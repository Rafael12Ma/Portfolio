import Profile from "../Components/content/profile";
import classes from "./mainPage.module.css";
import { NavLink } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <div>
        <div className="container">
          <Profile />
          {/* <Content /> */}
        </div>
      </div>
      <p>
        {/* <NavLink to="/products">Products</NavLink>
        <NavLink to="/projects">Projects</NavLink> */}
      </p>
      <div>
        <NavLink className={classes.displayProjects} to="/Projects">
          Display Projects
        </NavLink>
      </div>
    </>
  );
}
