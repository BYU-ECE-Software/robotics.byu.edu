import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SpeakerCard from "@/components/cards/SpeakerCard";
import { speakers } from "@/data/speakers";

export default function SpeakersPage() {
  return (
    <>
      <PageHero
        title="Speakers"
        subtitle="Meet our invited and featured speakers"
        image="/images/heroes/speakers-hero.webp"
        heroText="2026 North American School of Information Theory"
        heroSubtext="June 22-26, 2026 | Brigham Young University, Provo, UT"
      />
      <Container wide>
        <div className="grid gap-4">
          {speakers.map((s) => (
            <SpeakerCard key={s.id} speaker={s} />
          ))}
        </div>
      </Container>
      <br></br>
    </>
  );
}
