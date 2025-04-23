// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-grow">
        <Outlet /> {/* Renders the nested page content here */}
      </main>
      <Footer />
    </div>
  );
}
