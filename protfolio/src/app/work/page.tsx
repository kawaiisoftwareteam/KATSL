import React from "react";
import { Metadata } from "next";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Selected Work - Case Studies | Kawaii Advance Technology & Solution Limited",
  description: "A curated showcase of scalable software platforms engineered for global reach and enterprise performance by KATSL.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px", minHeight: "calc(100vh - 80px)" }}>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
