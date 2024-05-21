import ButtHead from "../Components/content/buttHeader";
import classes from "./info.module.css";

export default function Info() {
  return (
    <>
      <ButtHead />
      <section className={classes.section}>
        <div className={classes.container}>
          <h1 className={classes.educationHeader}>Education</h1>
          <hr className={classes.hr} />
          <ul>
            <p className={classes.text}>
              I started my journey in programming in 2020 in my first year at
              Uni. I have studied Computer Science at Duth University in Kavala,
              Greece.
            </p>
            <p className={classes.text}>I Speak English, German and Greek.</p>
            <p className={classes.text}>
              Meanwhile I have attended several seminars from Udemy,
              FreeCodeCamp about Front-End, Back-End, Machine Learning and
              Software Development.
            </p>
            <p className={classes.text}>
              I have worked in Several personal projects during my Uni years
              such as App development with{" "}
              <span className={classes.span}>React Native</span>, Optimization
              Algorithms (Ant Colony) with{" "}
              <span className={classes.span}>Python</span>. I have also created
              many <span className={classes.span}>Java</span> projects like
              Tic-Tac-Toe with <span className={classes.span}>Java Fx</span>.
              Recently I designed and coded a basic{" "}
              <span className={classes.span}>Html,Css</span> based web site
              about Hookah for a big night club in Drama, Greece. I have
              experience with Backend frameworks like{" "}
              <span className={classes.span}>Express js</span>, and{" "}
              <span className={classes.span}>Next js</span>. I just finished a
              blog about about cars with Express js. I got experience with{" "}
              <span className={classes.span}>SQL</span>,{" "}
              <span className={classes.span}>Typescript</span>,
              <span className={classes.span}>React</span>, ofcourse{" "}
              <span className={classes.span}>Javascript</span> and currently
              working on a project about Keystroke Dynamics using mainly{" "}
              <span className={classes.span}>Python</span> and{" "}
              <span className={classes.span}>Machine Learning </span>Models
            </p>
          </ul>
        </div>
      </section>
    </>
  );
}
