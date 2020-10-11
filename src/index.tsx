import "core-js/stable";
import * as React from "react";
import {render} from "react-dom";
import "regenerator-runtime/runtime";
import "what-input";

import "./config/interceptors";
import "./googleanalytics";
import Root from "./Root";
import {store} from "./store";
import {parseReferral} from "./util/affiliate";
import "./util/prototypes";

parseReferral();

const root = document.getElementById("root");
if (root !== null) {
    render(<Root store={store} />, root);
}
