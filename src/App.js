import React from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Recommend from "./components/Recommend";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Features />
      <Footer />
    </>
  );
}
