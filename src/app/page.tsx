import ChallengeSection from "@/components/ChallengeSection";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <Header />
      <ChallengeSection />
    </main>
  );
}
