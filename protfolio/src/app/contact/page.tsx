import React from "react";
import { Metadata } from "next";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact Us - Start Your Project | Kawaii Advance Technology & Solution Limited",
  description: "Let's connect! Get in touch with our enterprise engineering team to design and build your next scalable application, cloud backend, or custom AI agent.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px", minHeight: "calc(100vh - 80px)" }}>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
