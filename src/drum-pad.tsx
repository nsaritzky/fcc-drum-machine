import { useState, useEffect, useRef } from "react";

interface DrumPadProps {
  audioSource: string;
  keyboardKey: string;
  power: boolean;
  name: string;
  setActiveSound: React.Dispatch<React.SetStateAction<string>>;
}

const DrumPad = ({
  audioSource,
  keyboardKey,
  power,
  name,
  setActiveSound,
}: DrumPadProps) => {
  const [active, setActive] = useState(false);

  const sound = useRef<HTMLAudioElement>(null);
  const playSound = (e: KeyboardEvent | React.MouseEvent) => {
    if (
      (power &&
        "key" in e &&
        (e.key === keyboardKey.toUpperCase() ||
          e.key === keyboardKey.toLowerCase())) ||
      "button" in e
    ) {
      sound.current!.play();
      setActive(true);
      setActiveSound(name);
    }
  };
  const setInactive = () => {
    setActive(false);
  };
  useEffect(() => {
    addEventListener("keydown", playSound);
    sound.current!.addEventListener("ended", setInactive);

    return () => {
      removeEventListener("keydown", playSound);
      sound.current!.removeEventListener("ended", setInactive);
    };
  }, []);

  return (
    <div className="drum-pad" onClick={playSound} id={name}>
      <audio src={audioSource} id={keyboardKey} className="clip" ref={sound} />
      <div className="m-auto">{keyboardKey}</div>
    </div>
  );
};

export default DrumPad;
