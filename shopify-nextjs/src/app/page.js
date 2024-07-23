import Image from "next/image";
import Navbar from "../components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
    </main>
  );
}
