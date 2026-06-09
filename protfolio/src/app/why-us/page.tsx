import React from "react";
import { Metadata } from "next";
import Header from "../components/Header";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Why Choose Us - High Scale Engineering | Kawaii Advance Technology & Solution Limited",
  description: "Find out why global enterprises trust Kawaii Advance Technology & Solution Limited to design, build, and deploy custom software solutions.",
};

export default function WhyUsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px", minHeight: "calc(100vh - 80px)" }}>
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
