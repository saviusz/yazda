import React from 'react'
import style from "./Section.module.css";
import clsx from 'clsx';

interface Props {
    title: string,
    isOpen?: boolean,
    onSetOpen?: (isOpen: boolean) => void
    children: React.ReactNode
}

export default function Section(props: Props) {

    const {
        title,
        isOpen = false,
        children,
        onSetOpen = () => { },
    } = props;


    return <section className={clsx(style.container, isOpen && style.open)}>
        <h2 onClick={() => onSetOpen(!isOpen)}>{title}</h2>
        {isOpen && <div className={style.content}>{children}</div>}
    </section>
}
