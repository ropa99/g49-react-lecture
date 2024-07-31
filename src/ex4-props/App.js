import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

const App = () => {
  const logo = "logo.jpg";
  const links = ["Login", "Sign up", "About"];

  return (
    <>
      <Navbar logo={logo} links={links} />
      <Header text={"Marketplace UI!"} bgColor={"info"} />
      <Header />
    </>
  );
};

export default App;
