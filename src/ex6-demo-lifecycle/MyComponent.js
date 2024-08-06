import React, { Component } from "react";
import LifecycleClassComponent from "./LifecycleClassComponent";

class MyComponent extends Component {

// Initial stage
constructor(props) {
  super(props);

  this.state = {
    isComponentVisible: false,
  };
}

handleClickToUnmountComponent = () => {
  this.setState({ isComponentVisible: false });
};


handleClickToMountComponent = () => {
  this.setState({ isComponentVisible: true });
};


render() {
  return (
    <div id="test" className="container p-5 bg-light">
      <p>Component Lifecycle Example</p>
      <button type="button" className="btn btn-danger" onClick={this.handleClickToUnmountComponent}>
        Click to unmount
      </button>
      <button type="button" className="btn btn-success" onClick={this.handleClickToMountComponent}>
        Click to mount
      </button>
      {this.state.isComponentVisible && <LifecycleClassComponent />}

    </div>
  );
}
}

export default MyComponent;
