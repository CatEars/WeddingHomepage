import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initializeText } from "./text-content";

initializeText().then(() => {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById("root")
    );
});
