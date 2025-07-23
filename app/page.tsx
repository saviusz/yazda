"use client";

import clsx from "clsx";
import style from "./page.module.css";
import Button from "@/components/Button";
import StreamPlayer from "@/components/StreamPlayer";
export default function Home() {

  return <main className={style.main}>
    <div className={clsx(style.column, style.left)}>
      Left
      <StreamPlayer />
    </div>
    <div className={clsx(style.column, style.right)}>
      Right
      <Button text="Elo" keybind="spacja" role="success" />
    </div>
  </main>
}

