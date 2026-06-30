import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Accordion from "@/components/Accordion";
import { faqs } from "@/data/faqs";

export default function FAQsPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Quick answers about what we do with robotics at BYU"
        image="/images/heroes/faqs-hero.webp"
        heroText="Robotics at BYU"
        heroSubtext=""
      />
      <Container>
        <Accordion items={faqs} />
      </Container>
      {/* <br></br>
      <h2 className="text-3xl font-semibold text-center mt-8 mb-4">Things to Do in Provo</h2>
      <Container>
        <ThingsToDoList items={thingsToDo} />
      </Container> */}
      <br></br>
    </>
  );
}
