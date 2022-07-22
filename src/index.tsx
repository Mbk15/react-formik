import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ObjectExample from "./AdvancedReact/useState/ObjectExample";
import Booklist from "./components/Booklist";
import BasicExample from "./AdvancedReact/useState/BasicExample";
import ArrayExample from "./AdvancedReact/useState/ArrayExample";
import UseStateCounter from "./AdvancedReact/useState/UseStateCounter";
import ShowHide from "./AdvancedReact/Conditional Rendering/ShowHide";
import ReducerLaunch from "./AdvancedReact/UseReducer/ReducerLaunch";
import ControlledInputs from "./AdvancedReact/Forms/ControlledInputs";
import UseRefBasics from "./AdvancedReact/UseRef/UseRefBasics";
import PropsDrilling from "./AdvancedReact/PropsDrilling/PropsDrilling";
import ContextApi from "./AdvancedReact/UseContext/ContextApi";
import CustomHook from "./AdvancedReact/CustomHook/CustomHook";
import ProductLaunch from "./AdvancedReact/Prop-Types/ProductLaunch";
import UseCallback from "./AdvancedReact/Optimization/UseCallback";
import ReduceCounter from "./AdvancedReact/UseReducer/ReduceCounter";
import App from "./App";
import Boogie from "./AdvancedReact/useEffect/Boogie";

ReactDOM.render(
  <React.StrictMode>
    <Booklist />
    <BasicExample />
    <ArrayExample />
    <ObjectExample />
    <UseStateCounter />
    <ReduceCounter />
    {/* <UseffectBasic />
    <UseStateCleanup />
    <UseEffectFetchData /> 
    * <MultipleReturns />
    <ShortCircuit /> */}
    <Boogie />
    <ShowHide />

    <ShowHide />
    <ControlledInputs />
    <UseRefBasics />

    <ReducerLaunch />
    <PropsDrilling />
    <ContextApi />
    <CustomHook />
    <ProductLaunch />
    {/* <BrowserRouter>
<ReactRouterSetup/>
</BrowserRouter> */}
    <UseCallback />
    <BrowserRouter>
      <App />
    </BrowserRouter>

    {/* <ButtonUi message="Alhamdulillah" /> */}
    {/* <CardUI /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
