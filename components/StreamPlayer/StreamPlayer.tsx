"use client";

import style from "./StreamPlayer.module.css";

export default function StreamPlayer() {
  return <div className={style.container}>
    <video
      className={style.player}
      autoPlay
      muted
    >
      <source src="https://video.blender.org/static/web-videos/3d95fb3d-c866-42c8-9db1-fe82f48ccb95-480.mp4" type="video/mp4" />
      Ta przeglądarka nie wspiera odtwarzania video
    </video>
  </div>;
}
