import React from "react";
import ChallengeTitle from "../ChallengeTitle";
import Checkbox from "./components/Checkbox";

const ChallengeThree = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-y-4 h-[80vh]">
      <ChallengeTitle
        heading="Peerlist Animation Challenge - 3"
        title="Animated Checkboxes"
      />
      <div className="flex flex-col justify-start items-start gap-y-2">
        <Checkbox label="Learn Javascript" id="first" />
        <Checkbox label="Learn React" id="second" />
        <Checkbox label="Learn framer motion" id="third" />
      </div>
    </main>
  );
};

export default ChallengeThree;
