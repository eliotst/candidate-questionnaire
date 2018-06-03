import React from "react";
import ReactDOM from "react-dom";

import AppRouter from "./components/AppRouter";

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<AppRouter />, document.getElementById("main"));
});
