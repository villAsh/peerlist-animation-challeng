import ChallengeTitle from "../ChallengeTitle";
import ErrorTransition from "./components/ErrorTransition";
import SuccessTransition from "./components/SuccessTransition";

const ChallengeTwo = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-y-4 h-[80vh]">
      <ChallengeTitle
        heading="Peerlist Animation Challenge - 2"
        title="Dynamic Status Indicator"
      />
      <div className="flex flex-row justify-center items-center gap-x-4">
        <div className="text-center">
          <h1 className="font-medium text-lg">Success Transition</h1>
          <SuccessTransition />
        </div>
        <div className="text-center">
          <h1 className="font-medium text-lg">Error Transition</h1>
          <ErrorTransition />
        </div>
      </div>
    </main>
  );
};

export default ChallengeTwo;
