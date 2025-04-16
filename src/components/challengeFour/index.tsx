"use client";
import { useState } from "react";
import ChallengeTitle from "../ChallengeTitle";
import ToggleButton from "./components/ToggleButton";

const ChallengeFour = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <main className="flex flex-col justify-center items-center gap-y-4 h-[80vh]">
      <ChallengeTitle
        heading="Peerlist Animation Challenge - 4"
        title="Animated Toggles"
      />
      <div className="flex flex-col justify-start items-start gap-y-2 mt03">
        <ToggleButton isOn={isOn} setIsOn={setIsOn} />
      </div>
    </main>
  );
};

export default ChallengeFour;
