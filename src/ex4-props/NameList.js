//rafe
import React from "react";

const NameList = (props) => {
  //JS code variables, functions

  const getLastName = (name) => {
    let lastname = name.split(" ")[1];
    return lastname;
  };

  return (
    <ul>
      {props.list.map((name, index) => (
        <li key={index}>
          <span className="text-info">{name}</span> -{getLastName(name)}-
          {getLastName(name.toUpperCase())}
        </li>
      ))}
    </ul>
  );
};

export default NameList;
