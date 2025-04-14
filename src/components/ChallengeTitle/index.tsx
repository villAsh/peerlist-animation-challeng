import React from "react";

type Props = {
  heading: string;
  title: string;
};
const ChallengeTitle = ({ heading, title }: Props) => {
  return (
    <section className="flex flex-col justify-center items-center w-full text-center">
      <h1 className="shadow-white text-shadow drop-shadow-2xl font-semibold text-slate-200 max-lg:text-2xl text-4xl">
        {heading}
      </h1>
      <p className="font-semibold max-lg:text-lg text-2xl">{title}</p>
    </section>
  );
};

export default ChallengeTitle;
