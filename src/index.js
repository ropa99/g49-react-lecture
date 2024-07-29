import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

const element = <h2 className="text-danger">Hello React!</h2>;
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(element);
