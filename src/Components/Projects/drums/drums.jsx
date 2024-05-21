import classes from "./drums.module.css";
import html from "../../langIcons/html.png";
import css from "../../langIcons/css.png";
import js from "../../langIcons/Js.png";

export default function Drums({ flag }) {
  return (
    <>
      <div className={classes.tran}>
        {flag ? (
          <a
            className={classes.an}
            href="https://rafael12ma.github.io/Drums-1/"
            target="_blank"
            rel="noreferrer"
          >
            View
          </a>
        ) : null}
        {flag ? (
          <div className={classes.ternTrue}>
            <div className={classes.images}>
              <img src={html} alt="Html" />
              <img src={css} alt="Css" />
              <img src={js} alt="Javascript" />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
