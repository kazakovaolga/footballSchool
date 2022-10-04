//scss
import "./index.scss";
//firebase
import "./firebase";
//router
import { App } from "./components/Router/router";
//react
import { render } from "react-dom"; 

const root = document.getElementById("root");
render(<App />, root);