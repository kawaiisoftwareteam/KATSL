import React from "react";
import { Metadata } from "next";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Who We Are - About Us | Kawaii Advance Technology & Solution Limited",
  description: "Learn more about Kawaii Advance Technology & Solution Limited, our mission of innovation, quality standards, and digital product reliability.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px", minHeight: "calc(100vh - 80px)" }}>
        <About />
      </main>
      <Footer />
    </>
  );
}
