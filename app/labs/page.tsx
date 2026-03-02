import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SponsorLogo from "@/components/cards/SponsorLogo";
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
            <SponsorLogo key={s.id} sponsor={s} />
          ))}
        </div>
      </Container>
      <br></br>
    </>
  );
}
