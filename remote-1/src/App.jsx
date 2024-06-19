import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

const App = () => (
  <div>
    <Navbar />
    <Product />
  </div>
);
const root = createRoot(document.getElementById("app"));
root.render(<App />);
