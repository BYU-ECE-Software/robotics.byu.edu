import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import OrganizerCard from "@/components/cards/OrganizerCard";
import { organizers } from "@/data/organizers";

export default function OrganizersPage() {
  return (
    <>
      <PageHero
        title="Organizers"
        subtitle="The team behind the conference"
        image="/images/heroes/organizers-hero.webp"
        heroText="2026 North American School of Information Theory"
        heroSubtext="June 22-26, 2026 | Brigham Young University, Provo, UT"
      />

      <Container wide>
        <div className="grid gap-4">
          {organizers.map((p, i) => {
            const prev = organizers[i - 1];

            const showDivider = i === 0 || p.role !== prev?.role;

            return (
              <div key={p.id}>
                {showDivider && (
                  <div className="flex items-center gap-4 my-6">
                    <h2 className="text-xl font-semibold">{p.role}</h2>
                    <div className="flex-1 h-px bg-slate-200" />
                  </div>
                )}

                <OrganizerCard person={p} />
              </div>
            );
          })}
        </div>
      </Container>
      <br></br>
    </>
  );
}
