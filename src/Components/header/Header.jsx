import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import Button from "./buttons";
import logo from "./logo.png";
export default function Header() {
  return (
    <>
      <header className={classes.container}>
        <Link href="/">
          <img className={classes.logo} src={logo} alt="To logo mou." />
        </Link>
        <p className={classes.title}>Rafael's Portfolio</p>
        <Button value="en" className={classes.en} type={classes.en} />
        <Button value="gr" className={classes.gr} type={classes.gr} />
        <Button value="de" className={classes.de} type={classes.de} />
      </header>
    </>
  );
}
