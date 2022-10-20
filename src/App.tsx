import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import DrumPad from "./drum-pad";
import "./App.css";

const drums = [
  [
    { keyboardKey: "Q", audioSource: "./Heater-1.mp3", name: "heater-1" },
    { keyboardKey: "W", audioSource: "./Heater-2.mp3", name: "heater-2" },
    { keyboardKey: "E", audioSource: "./Heater-3.mp3", name: "heater-3" },
  ],
  [
    { keyboardKey: "A", audioSource: "./Heater-4_1.mp3", name: "heater-4" },
    { keyboardKey: "S", audioSource: "./Heater-6.mp3", name: "clap" },
    { keyboardKey: "D", audioSource: "./Dsc_Oh.mp3", name: "open-HH" },
  ],
  [
    { keyboardKey: "Z", audioSource: "Kick_n_Hat.mp3", name: "kick-n-hat" },
    { keyboardKey: "X", audioSource: "RP4_KICK_1.mp3", name: "kick" },
    { keyboardKey: "C", audioSource: "Cev_H2.mp3", name: "closed-HH" },
  ],
];

const sound = new Audio("../Heater-1.mp3");

function App() {
  const [power, setPower] = useState(true);
  const [activeSound, setActiveSound] = useState("");

  return (
    <div className="flex justify-center">
      <div
        id="drum-machine"
        className="m-auto max-w-min border-2 flex flex-row"
      >
        <div>
          {drums.map((row, i) => (
            <div className="flex flex-row" key={i}>
              {row.map((pad) => (
                <DrumPad
                  {...pad}
                  power={power}
                  key={pad.keyboardKey}
                  setActiveSound={setActiveSound}
                />
              ))}
            </div>
          ))}
        </div>
        <div
          className="my-auto px-4 border m-2 bg-gray-100 w-32 text-center"
          id="display"
        >
          {activeSound}
        </div>
      </div>
    </div>
  );
}

export default App;
