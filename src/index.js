import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./Style/index.css";
import DataColorContextProvider from "./component/Context/ColorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataColorContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataColorContextProvider>
);
