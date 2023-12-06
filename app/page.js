import Image from "next/image";
import Navbar from "./component/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-1"></main>
    </>
  );
}
