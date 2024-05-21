import classes from "./Header.module.css";

export default function Button({ value, type }) {
  return (
    <>
      <button className={type}>{value}</button>
    </>
  );
}
