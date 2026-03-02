import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SpeakerCard from "@/components/cards/SpeakerCard";
import { professors } from "@/data/professors";

export default function ProfessorsPage() {
  return (
    <>
      <PageHero
        title="Professors"
        subtitle="Learn about the professors involved in robotics research at BYU"
        image="/images/heroes/speakers-hero.webp"
        heroText="Robotics at BYU"
        heroSubtext=""
      />
      <Container wide>
        <div className="grid gap-4">
          {professors.map((p) => (
            <SpeakerCard key={p.id} speaker={p} />
          ))}
        </div>
      </Container>
      <br></br>
    </>
  );
}
