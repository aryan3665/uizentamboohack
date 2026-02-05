import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TamboProvider } from "@tambo-ai/react";
import { ThemeProvider } from "./components/ThemeProvider";
import { components, tools } from "./lib/tambo";
import HomePage from "./app/page";
import ChatPage from "./app/chat/page";
import DashboardPage from "./app/dashboard/page";
import InteractablesPage from "./app/interactables/page";
import "./app/globals.css";

const apiKey = import.meta.env.VITE_TAMBO_API_KEY || "";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TamboProvider
        apiKey={apiKey}
        components={components}
        tools={tools}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/interactables" element={<InteractablesPage />} />
          </Routes>
        </BrowserRouter>
      </TamboProvider>
    </ThemeProvider>
  </React.StrictMode>
);
