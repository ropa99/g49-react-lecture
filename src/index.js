import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
//import App from "./ex2-function-component/App";
import NameList from "./ex4-props/NameList";
import App from "./ex4-props/App";
import Home from "./ex5-state/Home";
import Counter from "./ex5-state/Counter";
import MyComponent from "./ex6-demo-lifecycle/MyComponent";
import ToggleButton from "./ex5-state/ToggleButton";
import HooksDemo from "./ex7-hooks/HooksDemo";
import TodoList from "./ex7-hooks/TodoList";
import ValidationForm from "./ex7-hooks/ValidationForm";
import HookFormDemo from "./ex7-hooks/HookFormDemo";
import SkillPractice from "./react-hooks-practice/SkillPractice";
import AxiosDemo from "./ex8-axios-router/AxiosDemo";
//import NameList from "./ex3-var-function/NameList";

const root = ReactDom.createRoot(document.getElementById("root"));
//const list = ["Negar Baharmand", "Mehrdad Javan", "Simon Elbrink"];
//root.render(<NameList list={list} />);
root.render(
  // <>
  //   <NameList list={["Negar Baharmand", "Mehrdad Javan", "Simon Elbrink"]} />
  //   <NameList list={["Test testsson", "John Doe"]} />
  // </>
  <div className="container">
    <AxiosDemo />
  </div>
);
