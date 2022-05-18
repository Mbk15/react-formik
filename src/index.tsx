import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ButtonUi from "./components/ButtonUi";
import CardUI from "./components/CardUI";
import Booklist from "./components/Booklist";
import BasicExample from "./AdvancedReact/useState/BasicExample";
import ArrayExample from "./AdvancedReact/useState/ArrayExample";

ReactDOM.render(
  <React.StrictMode>
    <Booklist />
    <BasicExample />
    <ArrayExample />
    {/* <ButtonUi message="Alhamdulillah" /> */}
    {/* <CardUI /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
