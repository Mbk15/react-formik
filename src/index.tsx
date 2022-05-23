import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ObjectExample from "./AdvancedReact/useState/ObjectExample";
import Booklist from "./components/Booklist";
import BasicExample from "./AdvancedReact/useState/BasicExample";
import ArrayExample from "./AdvancedReact/useState/ArrayExample";
import UseStateCounter from "./AdvancedReact/useState/UseStateCounter";
import UseffectBasic from "./AdvancedReact/useEffect/UseffectBasic";
import UseStateCleanup from "./AdvancedReact/useEffect/UseEffectCleanup";
import UseEffectFetchData from "./AdvancedReact/useEffect/UseEffectFetchData";
ReactDOM.render(
  <React.StrictMode>
    <Booklist />
    <BasicExample />
    <ArrayExample />
    <ObjectExample />
    <UseStateCounter />
    <UseffectBasic />
    <UseStateCleanup />
    <UseEffectFetchData />
    {/* <ButtonUi message="Alhamdulillah" /> */}
    {/* <CardUI /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
