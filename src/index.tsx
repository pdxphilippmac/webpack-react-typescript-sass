import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { InitialText } from "./components/IitialText/InitialText"
import { Text, Button } from "./components/Text/Text"

import "./styles/global.scss";


ReactDOM.render(
    <div>
        <InitialText name="Hello this is Webpack starter" />
        <Text item="Item Text" />
        <Button onClick={() => alert("testi")} />
    </div>,
    document.getElementById("app"),
);