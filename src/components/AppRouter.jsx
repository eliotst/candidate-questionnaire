import { HashRouter } from "react-router-dom";
import React from "react";

import App from "./App";

export default function AppRouter() {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
}
