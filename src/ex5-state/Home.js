import { useState } from "react";

const Home = () => {
  //let name = "Alice";

  const [name, setName] = useState("Alice");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("Sarah");
    setAge(30);
  };

  return (
    <div className="container">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click on me!</button>
      <p>
        {name} is {age} years old.
      </p>
    </div>
  );
};

export default Home;
