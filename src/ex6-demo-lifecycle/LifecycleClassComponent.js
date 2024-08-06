import React, { Component } from "react";


class LifecycleClassComponent extends Component {

// Initial stage
constructor(props) {
  super(props);

  this.state = {
    name: "Default Value",
     date: Date()
  };
}

  componentDidMount() {
    console.log("Class Component: componentDidMount");
  }

  componentDidUpdate() {
    console.log("Class Component: componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Class Component: componentWillUnmount");
  }

  handleClickToUpdateState = () => {
    this.setState({name: "Updated Value", date: Date() });
  };
  
  render() {
    return (
      <div className="container mt-5 bg-secondary p-5">
        <h1>Hello, I'm a component!</h1>
        <h5>{this.state.name} - {this.state.date}</h5>
        
        <button type="button" className="btn btn-warning" onClick={this.handleClickToUpdateState}>
          Update State
        </button>
      </div>
    );
  }
}
  

export default LifecycleClassComponent;
