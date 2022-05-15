import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { initializeMedia } from "./media-content";

initializeMedia().then(() => {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById("root")
    );
});
