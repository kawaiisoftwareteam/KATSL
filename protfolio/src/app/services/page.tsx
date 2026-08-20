import React from "react";
import { Metadata } from "next";
import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Our Services - Custom Software Engineering | Kawaii Advanced Technology & Solution Limited",
  description: "Explore enterprise software consulting, custom web application development, cross-platform mobile apps, cloud architectures, and AI integrations.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px", minHeight: "calc(100vh - 80px)" }}>
        <Services headingLevel="h1" />
      </main>
      <Footer />
    </>
  );
}
