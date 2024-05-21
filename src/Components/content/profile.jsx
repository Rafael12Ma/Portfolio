import classes from "./profile.module.css";
import me from "./me.jpg";
import ButtHead from "./buttHeader";

export default function Profile() {
  return (
    <>
      <ButtHead />
      <div className={classes.box}>
        <div className={classes.profileCard}>
          {/* {isClicked ? ( */}
          <>
            <div className={classes.myImage}>
              <img src={me} alt="A foto about me!" />
            </div>
            <h1 className={classes.name}>Rafael Maroufidis</h1>
            <h2 className={classes.job}>Software Developer.</h2>
            <div className="icon">
              <a
                className={classes.icons}
                href="https://www.facebook.com/profile.php?id=100026189599848"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f "></i>
              </a>
              <a
                className={classes.icons}
                href="https://github.com/Rafael12Ma"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                className={classes.icons}
                href="https://www.instagram.com/maroufidis.r/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className={classes.icons}
                href="https://www.linkedin.com/in/rafail-maroufidis-79a905298/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div>
              <a
                className={classes.email}
                href="mailto:rafaelmaroufidis@yahoo.com"
              >
                Contact me
              </a>
            </div>
          </>
          {/* ) */}
          {/* : (
            "didnt clicked"
          )} */}
        </div>
      </div>
    </>
  );
}
