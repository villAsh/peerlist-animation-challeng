import Link from "next/link";

type Props = {
  title: string;
  id: string;
  isDisabled: boolean;
};
const ChallengeCard = ({ title, id, isDisabled }: Props) => {
  return (
    <Link
      href={isDisabled ? "#" : `challenge/${id}`}
      className={`group relative px-8 py-2 rounded-md font-medium text-2xl text-center ${
        isDisabled
          ? "bg-gray-400 text-gray-300 cursor-not-allowed"
          : "bg-[#00AA45]/80 text-slate-100"
      }`}
    >
      <span
        className={`top-0 left-0 absolute rounded-md w-0 h-full transition-all duration-300 ease-in-out ${
          isDisabled ? "bg-gray-400" : "bg-green-500 group-hover:w-full"
        }`}
      />
      <span className="relative">{title}</span>
    </Link>
  );
};

export default ChallengeCard;
