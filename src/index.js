import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./Style/index.css";
import DataColorContextProvider from "./component/Context/ColorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
  <DataColorContextProvider>
      <App />
  </DataColorContextProvider>
    </BrowserRouter>
);
