import React from 'react'
import style from "./Column.module.css";

export default function Column({children} : {children: React.ReactNode}) {
  return <div className={style.container}>
    {children}
  </div>
}
