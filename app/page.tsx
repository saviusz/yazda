"use client";

import clsx from "clsx";
import style from "./page.module.css";
import Button from "@/components/Button";
import StreamPlayer from "@/components/StreamPlayer";
import Section from "@/components/Section";
import { useState } from "react";
export default function Home() {

  const [openSection, setOpenSection] = useState("positions");

  return <main className={style.main}>
    <div className={clsx(style.column, style.left)}>
      <StreamPlayer />
    </div>
    <div className={clsx(style.column, style.right)}>
      <Section title="Pozycje" isOpen={openSection == "positions"} onSetOpen={() => setOpenSection("positions")}>
        Pozycje
      </Section>

      <Section title="Prędkości" isOpen={openSection == "speeds"} onSetOpen={() => setOpenSection("speeds")}>
        Prędkość
      </Section>

      <Section title="Easingi" isOpen={openSection == "easings"} onSetOpen={() => setOpenSection("easings")}>
        Easing
      </Section>

      <Section title="Ruchy" isOpen={openSection == "moves"} onSetOpen={() => setOpenSection("moves")}>
        Ruch
      </Section>
      
      <Button text="Elo" keybind="spacja" role="success" />
    </div>
  </main>
}

