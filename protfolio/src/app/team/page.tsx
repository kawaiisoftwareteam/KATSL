import React from "react";
import { Metadata } from "next";
import Header from "../components/Header";
import Team from "../components/Team";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Our Team - Meet the Engineers & Designers | Kawaii Advance Technology & Solution Limited",
  description: "Meet the experts behind KATSL setting the technological direction and scaling custom AI models, cloud infrastructures, and digital designs.",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px", minHeight: "calc(100vh - 80px)" }}>
        <Team />
      </main>
      <Footer />
    </>
  );
}
