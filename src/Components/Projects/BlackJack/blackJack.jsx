import classes from "./blackJack.module.css";

import py from "../../langIcons/py.jpeg";

export default function BlackJack({ flag }) {
  return (
    <>
      <div className={classes.tran}>
        {flag ? (
          <a
            className={classes.bj}
            href="https://github.com/Rafael12Ma/Black-Jack"
            target="_blank"
            rel="noreferrer"
          >
            View
          </a>
        ) : null}
        {flag ? (
          <div className={classes.ternTrue}>
            <div className={classes.images}>
              <img src={py} alt="Javascript" />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
