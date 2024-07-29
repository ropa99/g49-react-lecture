//rce
import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">Hello World!</div>
        <Footer />
      </>
    );
  }
}

export default App;
