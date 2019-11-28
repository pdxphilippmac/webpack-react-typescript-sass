import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { InitialText } from "./components/Banner/Banner"
import "./styles/global.scss";

ReactDOM.render(
    <div>
        <InitialText name="Hello this is Webpack starter" />
    </div>,
    document.getElementById("app"),
);