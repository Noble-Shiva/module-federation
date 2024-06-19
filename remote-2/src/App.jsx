import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import Newsletter from "./components/Newsletter";
import Stats from "./components/Stats";

const App = () => (
  <div>
    <Stats />
    <Newsletter />
  </div>
);
const root = createRoot(document.getElementById("app"));
root.render(<App />);
