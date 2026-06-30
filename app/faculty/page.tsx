import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ProfessorCard from "@/components/cards/ProfessorCard";
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
            <ProfessorCard key={p.id} professor={p} />
          ))}
        </div>
      </Container>
      <br></br>
    </>
  );
}
