import { Head } from "$fresh/runtime.ts";
import Forcem from "../islands/Forcem.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <div>
      <Forcem count={5} content="4" />
      <Footer />
    </div>
  );
}
