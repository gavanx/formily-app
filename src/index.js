import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@formily/antd/dist/antd.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FormilyApp from "./demo/FormilyApp";
import LoginApp from "./demo/LoginApp";
import { DatePicker } from "antd";
import SchemaApp from "./demo/SchemaApp";
import SchemaApp2 from "./demo/SchemaApp2";

ReactDOM.render(
  <React.StrictMode>
    <SchemaApp2 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
