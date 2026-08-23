import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Firm from "./pages/Firm.tsx";
import Services from "./pages/Services.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import Contact from "./pages/Contact.tsx";
import AttorneyPage from "./pages/AttorneyPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="firm" element={<Firm />} />
          <Route path="services" element={<Services />} />
          <Route path="service/:slug" element={<ServicePage />} />
          <Route path="contact" element={<Contact />} />
          <Route path=":slug" element={<AttorneyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
