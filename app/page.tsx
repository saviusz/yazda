"use client";

import clsx from "clsx";
import style from "./page.module.css";
import Button from "@/components/Button";
import StreamPlayer from "@/components/StreamPlayer";
import Slider from "@/components/Slider";
import { useState } from "react";
export default function Home() {

  const [speed, setSpeed] = useState(0);

  return <main className={style.main}>
    <div className={clsx(style.column, style.left)}>
      Left
      <StreamPlayer />
      <Slider label="Pozycja" value={90} progress={81.926}/>
      <Slider label="Prędkość" value={speed} onChange={setSpeed} displayValue={`${Math.round(speed/100 * 20 * 2) / 2} kr/s`}/>
    </div>
    <div className={clsx(style.column, style.right)}>
      Right
      <Button text="Elo" keybind="spacja" role="success" />
    </div>
  </main>
}

