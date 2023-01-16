import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/page.module.css";
import Banner from "../components/Banner";
import Row from "../components/Row";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="space-y-10 pb-20">
      <Banner />
      <Row/>
     
    </main>
  );
}
