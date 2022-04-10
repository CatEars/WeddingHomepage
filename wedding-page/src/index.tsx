import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initializeMedia } from "./media-content";
import { initializeText } from "./text-content";
import { worker } from "./mocks/browser";

if (process.env.NODE_ENV === "development") {
    if (window.location.pathname === "/info") {
        window.location.pathname = "/info/";
    }
    worker.start({
        serviceWorker: {
            url: "/info/mockServiceWorker.js",
        },
    });
}

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
