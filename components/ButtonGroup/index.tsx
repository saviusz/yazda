import React from 'react'
import style from "./ButtonGroup.module.css"


export default function ButtonGroup({children} : {children: React.ReactNode}) {
  return <div className={style.container}>{children}</div>
}
