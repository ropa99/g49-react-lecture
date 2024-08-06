import React, { useEffect, useState } from "react";

const HooksDemo = () => {
  const [date, setDate] = useState("-");
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    console.log("UseEffect Called.");
    const currentDate = new Date().toLocaleString("sv-SE");
    setDate(currentDate);
  }, [reloadData]);

  const updateDateHandler = () => {
    setReloadData(!reloadData);
  };
  return (
    <div className="container">
      <h3>Hooks Demo</h3>
      <div className="alert alert-info">{date}</div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-info"
            onClick={updateDateHandler}
          >
            Update Date
          </button>
        </div>
      </div>
    </div>
  );
};

export default HooksDemo;
