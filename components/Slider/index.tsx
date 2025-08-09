import React from 'react'
import style from "./Slider.module.css";

interface Props {
    label: string;

    value: number;
    displayValue?: string;

    showProgress?: boolean;
    progress?: number;

    onChange?: (value: number) => void

    min?: number;
    max?: number;
    step?: number | null;
}

export default function Slider(props: Props) {

    const {
        label,
        
        showProgress = props.progress ? true : false,
        onChange = () => { },
        displayValue = showProgress ? `${props.value}% / ${ props.progress ? Math.round(props.progress * 100) / 100 : "undefined"}%` : `${Math.round(props.value * 100) / 100}%`,
    } = props;

  return <div className={style.container}>
    <div className={style.input_container}>
        <input
        type="range"
        className={style.slider}
        min={props.min || 0}
        max={props.max || 100}
        step={props.step || "any"}

        value={props.value}
        onChange={(e) => onChange(Number(e.target.value))}
        />
        {
            showProgress &&
            <div className={style.tag} style={{ "--progress": props.progress } as React.CSSProperties}></div>
        }
    </div>
    <div className={style.texts}>
        <span className={style.label}>{label}</span>
        <span className={style.value}>{displayValue}</span>
    </div>
  </div>
}
