import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import LabLogo from "@/components/cards/LabLogo";
import { labs } from "@/data/labs";

export default function LabsPage() {
  return (
    <>
      <PageHero
        title="Labs"
        subtitle="Come learn about the robotics labs at BYU and the research being done there"
        image="/images/heroes/sponsors-hero.webp"
        heroText="Robotics at BYU"
        heroSubtext=""
      />
      <Container wide>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {labs.map((s) => (
            <LabLogo key={s.id} lab={s} />
          ))}
        </div>
      </Container>
      <br></br>
    </>
  );
}
