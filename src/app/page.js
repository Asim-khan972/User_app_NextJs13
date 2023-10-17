"use client";
import Image from "next/image";
import { Roboto } from "next/font/google";
import styles from "./page.module.css";
import style from "./styles/style.module.css";
import img from "./../../public/Asim-pic.jpeg";
import { useState } from "react";
export default function Home() {
  const [color, setColor] = useState("re");
  return (
    <main className={styles.main}>
      <h1 className={color === "red" ? style.red : style.green}>
        Hello from Asim on NextJS 13{" "}
      </h1>
      <a href="/productlist">Product List</a>
      <a href="/user">User </a>
      <h1>helooo</h1>
      <Image src={img} />
    </main>
  );
}
