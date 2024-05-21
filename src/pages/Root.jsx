import { Outlet } from "react-router-dom";
import Header from "../Components/header/Header";
import Entry from "./entry";

export default function Layout() {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
    </>
  );
}
