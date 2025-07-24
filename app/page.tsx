"use client";

import clsx from "clsx";
import style from "./page.module.css";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Slider from "@/components/Slider";
import StreamPlayer from "@/components/StreamPlayer";

import { useState } from "react";
export default function Home() {

  const [speed, setSpeed] = useState(0);
  const [openSection, setOpenSection] = useState("positions");

  return <main className={style.main}>
    <div className={clsx(style.column, style.left)}>
      <StreamPlayer />
      <Slider label="Pozycja" value={90} progress={81.926}/>
      <Slider label="Prędkość" value={speed} onChange={setSpeed} displayValue={`${Math.round(speed/100 * 20 * 2) / 2} kr/s`}/>
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

