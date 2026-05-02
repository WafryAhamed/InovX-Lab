import './index.css';
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { NotFound } from "./components/NotFound";
import { NotAvailable } from "./components/NotAvailable";

const root = createRoot(document.getElementById("root"));

const path = window.location.pathname;
if (path === '/coming-soon' || path === '/404') {
  root.render(<NotFound />);
} else if (path === '/not-available') {
  root.render(<NotAvailable />);
} else {
  root.render(<App />);
}
