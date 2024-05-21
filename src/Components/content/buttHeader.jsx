import { Link } from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";
import { AiTwotoneContacts } from "react-icons/ai";
import classes from "../../pages/projects.module.css";

export default function ButtHead() {
  return (
    <>
      <div className={classes.divback}>
        <Link className={classes.back} to="/home">
          <p>
            Contact <AiTwotoneContacts />
          </p>
        </Link>
        <Link className={classes.back} to="/info">
          About me
        </Link>
        {/* <Link className={classes.back} to="/..">
          <p>
            Back <VscArrowLeft />
          </p>
        </Link> */}
      </div>
    </>
  );
}
