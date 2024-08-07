import React, { useState } from "react";

const ValidationForm = () => {
  const [person, setPerson] = useState({ email: "", name: "" });
  const [errorMessage, setErrorMessage] = useState({ email: "", name: "" });

  const emailChangeHandler = (e) => {
    //console.log(">>>>>>", e.target.value);
    setPerson({ ...person, email: e.target.value });
  };

  const nameChangeHandler = (e) => {
    setPerson({ ...person, name: e.target.value });
  };

  const buttonClickHandler = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let error = { name: "", email: "" };
    let isValid = true;
    if (!emailRegex.test(person.email)) {
      error.email = "Email is not valid.";
      isValid = false;
    }
    if (person.name === "") {
      error.name = "Name is not valid.";
      isValid = false;
    }
    setErrorMessage(error);
    if (isValid) {
      setErrorMessage({ email: "", name: "" });
      console.log(person);
      console.log("Send data to the backend");
      //make a post http request to the backend
    }
  };
  const buttonResetHandler = () => {
    setPerson({ name: "", email: "" });
    setErrorMessage({ name: "", email: "" });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <form>
            <div className="mb-3 mt-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                value={person.email}
                onChange={emailChangeHandler}
              />
              {errorMessage && errorMessage.email && (
                <p className="text-danger">{errorMessage.email}</p>
              )}
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name§"
                placeholder="Enter name"
                name="name"
                value={person.name}
                onChange={nameChangeHandler}
              />
              {errorMessage && errorMessage.name && (
                <p className="text-danger">{errorMessage.name}</p>
              )}
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={buttonClickHandler}
            >
              Click
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={buttonResetHandler}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ValidationForm;
