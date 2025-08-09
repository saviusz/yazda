import React, { useRef } from 'react'
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
    disabled?: boolean;
}

export default function Button({
    text,
    action = () => { },
    keybind,
    repeat = false,
    className,
    role = "secondary",
    disabled = false
}: Props) {

    /* const interval = useRef<NodeJS.Timeout | null>(null);

    action = repeatAfterWait({
        cooldown: 100,
        startRepeatingAfter: repeat ? 800 : Infinity,
        repeatEvery: 100
    }, action);

    const start = () => {
        interval.current = setInterval(() => action(), 10);
    }

    const stop = () => {
        if (interval.current) clearInterval(interval.current);
    } */

    return (
        <button
            disabled={disabled}
            className={clsx(style.button, className, style[role])}
            /* onPointerDown={start}
            onPointerUp={stop}
            onPointerCancel={stop} */
            onClick={action}
        >
            {text}
            <span className={style.keybind}>{keybind}</span>
        </button>
    )
}
