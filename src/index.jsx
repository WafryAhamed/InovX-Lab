import './index.css';
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { NotFound } from "./components/NotFound";
import { NotAvailable } from "./components/NotAvailable";

const root = createRoot(document.getElementById("root"));

// Normalize path to handle trailing slashes and direct sub-route access
const path = window.location.pathname.replace(/\/$/, "");

if (path === '/coming-soon' || path === '/404') {
  root.render(<NotFound />);
} else if (path === '/not-available') {
  root.render(<NotAvailable />);
} else {
  root.render(<App />);
}
