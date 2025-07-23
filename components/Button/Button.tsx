import React from 'react'
import style from "./Button.module.css";
import repeatAfterWait from '@/utils/repeatAferWait';
import clsx from 'clsx';

export type ButtonRole = "primary" | "secondary" | "success" | "danger";

export interface Props {
    text: string;
    keybind?: string;
    action?: () => void;
    repeat?: boolean;

    role?: ButtonRole

    className?: string;
}

export default function Button({
    text,
    action = () => { },
    keybind,
    repeat = false,
    className,
    role = "secondary"
}: Props) {
    let interval: NodeJS.Timeout;

    if (repeat) action = repeatAfterWait({
        cooldown: 100,
        startRepeatingAfter: 800,
        repeatEvery: 100
    }, action);

    const start = () => {
        interval = setInterval(() => action(), 10);
    }

    const stop = () => {
        clearInterval(interval);
    }

    return (
        <button className={clsx(style.button, className, style[role])} onPointerDown={start} onPointerUp={stop}>
            {text}
            <span className={style.keybind}>{keybind}</span>
        </button>
    )
}
