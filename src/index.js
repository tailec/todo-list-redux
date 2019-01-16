import React from "react";
import { render } from "react-dom";

import "./styles.css";
import Root from "./components/Root";
import configureStore from "./redux/configureStore";

const store = configureStore();
render(<Root store={store} />, document.getElementById("root"));
