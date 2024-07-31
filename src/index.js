import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
//import App from "./ex2-function-component/App";
import NameList from "./ex4-props/NameList";
import App from "./ex4-props/App";
import Home from "./ex5-state/Home";
import Counter from "./ex5-state/Counter";
//import NameList from "./ex3-var-function/NameList";

const root = ReactDom.createRoot(document.getElementById("root"));
//const list = ["Negar Baharmand", "Mehrdad Javan", "Simon Elbrink"];
//root.render(<NameList list={list} />);
root.render(
  // <>
  //   <NameList list={["Negar Baharmand", "Mehrdad Javan", "Simon Elbrink"]} />
  //   <NameList list={["Test testsson", "John Doe"]} />
  // </>
  <Counter />
);
