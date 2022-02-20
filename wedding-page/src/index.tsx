import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initializeMedia } from "./media-content";
import { initializeText } from "./text-content";

initializeText()
    .then(() => initializeMedia())
    .then(() => {
        ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
            document.getElementById("root")
        );
    });
