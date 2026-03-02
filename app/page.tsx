import Container from "@/components/Container";
import HomepageHero from "@/components/HomepageHero";
import Section from "@/components/Section";

export const metadata = {
  title: "NASIT 2026 Conference",
  description:
    "Join researchers, engineers, and students for talks, posters, and community at the North American School of Information Theory 2026 Conference.",
};

export default function HomePage() {
  return (
    <>
      <HomepageHero
        title=""
        subtitle=""
        image="/images/heroes/hero-default.jpg"
        heroText="Robotics at BYU"
        heroSubtext=""
      />
      <Container wide>
        <Section title="">
          <p>
            BYU has a rich history of robotics, attracting lead researchers from all around the world to collaborate with us. We will put more text here in the future!
          </p>
          
        </Section>

      </Container>
      <br></br>
    </>
  );
}
