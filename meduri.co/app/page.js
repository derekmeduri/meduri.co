"use client";
import Image from "next/image";
import Navigation from "./navigation/page";
import HomeCarousel from "./components/HomeCarousel";

export default function Page() {
  return (
    <main>
      <Navigation />
      <div>Home Page</div>
      <HomeCarousel />
    </main>
  );
}
