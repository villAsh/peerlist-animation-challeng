import data from "@/data/data";
import ChallengeCard from "@/components/challengeCard";
const ChallengeSection = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-y-4 mt-8 pt-6 w-1/4 max-lg:w-full">
      {data.map((item) => (
        <ChallengeCard
          key={item.id}
          title={item.title}
          id={item.id}
          isDisabled={item.disabled}
        />
      ))}
    </section>
  );
};

export default ChallengeSection;
