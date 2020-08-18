import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./app/App";

const rootApp = (
	<StrictMode>
		<App />
	</StrictMode>
);

ReactDOM.render(rootApp, document.getElementById("root"));
