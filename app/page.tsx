"use client";

import clsx from "clsx";
import style from "./page.module.css";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Slider from "@/components/Slider";
import StreamPlayer from "@/components/StreamPlayer";

import { useState } from "react";
import { useConfig } from "@/lib/config";
import ButtonGroup from "@/components/ButtonGroup";
import { roundPrecision } from "@/utils/roundPrecision";
export default function Home() {

  const [speed, _setSpeed] = useState(0);
  const [position, _setPosition] = useState(0);

  const setPosition = (position: number) => {
    const formatedPos = roundPrecision(position, 0.05);
    _setPosition(formatedPos);
  }

  const setSpeed = (speed: number) => {
    const formatedSpeed = roundPrecision(speed, 0.5);
    _setSpeed(formatedSpeed);
  }


  const [openSection, setOpenSection] = useState("positions");

  const [savedPositions, setSavedPositions] = useConfig("savedPositions");

  const [savedSpeeds, setSavedSpeeds] = useConfig("savedSpeeds");
  const [minSpeed] = useConfig("minSpeed");
  const [maxSpeed] = useConfig("maxSpeed");

  return <main className={style.main}>
    <div className={clsx(style.column, style.left)}>

      <StreamPlayer />

      <Slider
        label="Pozycja"
        value={position}
        progress={81.926}
        onChange={(pos) => setPosition(pos)}
      />

      <Slider
        label="Prędkość"
        value={speed}
        onChange={setSpeed}
        min={minSpeed}
        max={maxSpeed}
        displayValue={`${speed} kr/s`}
      />

      <ButtonGroup>
        <Button text="Resetuj" action={() => {
          debugger;
          setSavedSpeeds([]);
          setSavedPositions([]);
        }}/>
      </ButtonGroup>

    </div>
    <div className={clsx(style.column, style.right)}>
      <Section
        title="Pozycje"
        isOpen={openSection == "positions"}
        onSetOpen={() => setOpenSection("positions")}
      >
        <ButtonGroup>
           {
            savedPositions.map(
              (pos) => <Button
                key={pos.label + "_" + pos.value}
                text={pos.label}
                keybind={pos.keybind}
                action={() => {
                  setPosition(pos.value);
                }}
                className={pos.value == position ? style.selected : ""}
              />
            )
          }
          <Button
            text="+"
            action={() => {
              setSavedPositions([
                ...savedPositions,
                { label: `${position}%`, value: position, keybind: "" }
              ]);
            }}
            disabled={savedPositions.some((savedPosition) => savedPosition.value == position)}
          />
        </ButtonGroup>
      </Section>

      <Section title="Prędkości" isOpen={openSection == "speeds"} onSetOpen={() => setOpenSection("speeds")}>
        <ButtonGroup>
          {
            savedSpeeds.map(
              (savedSpeed) => {
                const active = savedSpeed.value == speed;

                return <Button
                  key={savedSpeed.label + "_" + savedSpeed.value}
                  text={savedSpeed.label}
                  keybind={savedSpeed.keybind}
                  action={() => {
                    setSpeed(savedSpeed.value);
                  } }
                  className={active ? style.selected : ""} />;
              }
            )
          }
          <Button
            text="+"
            action={() => {
              setSavedSpeeds([
                ...savedSpeeds,
                { label: `${speed} kr/s`, value: speed, keybind: "" }
              ]);
            }}
            disabled={savedSpeeds.some((savedSpeed) => savedSpeed.value == speed)}
          />
        </ButtonGroup>
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

