"use client";

import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Image from "next/image";

export default function ReuPage() {
  return (
    <>
      <PageHero
        title="Robotics Pioneers REU Summer Program"
        subtitle="Come learn about robotics from world-leading experts."
        image="/images/heroes/speakers-hero.webp"
        heroText="Robotics Pioneers: REU"
        heroSubtext=""
      />
      <Container wide>
        <p>
            Thanks for your interest in BYU's Robotics Pioneers: Research Experience for Undergraduates (REU) summer research internship program funded by the National Science Foundation (NSF)! Starting in the Summer of 2026, this 10-week program will enable non-BYU undergraduates to come to campus in Provo and participate in real-world research in robotics.
        </p>
        <br></br>
        <p>
            Our goal is to develop accomplished and confident engineers and researchers who are innovators in the field of robotics. To achieve this BYU's Robotics Pioneers: REU program provides undergraduate students with the opportunity to participate in real-world robotics research and gain experience to prepare for graduate school and a meaningful or impactful career in robotics.
        </p>
        <br></br>
        <p>
            Research opportunities include the ability to participate in projects across the spectrum of robotics with the goal of enabling robots to operate in extreme environments. Potential projects include: coral reef monitoring using autonomous underwater robots, mapping of chemical and radioactive hazards using aerial drones, and soft-robots for space applications, among many others.
        </p>
        <br></br>
        <Image
            src="/images/reu/reu-hero.webp"
            alt="REU students working on a robotics project"
            width={1200}
            height={800}
            className="rounded-lg">
        

        </Image>
        <p>
            To apply, click the link below (note that NSF restricts the REU program to US citizens and permanent residents):
        </p>
        <button
            onClick={() => window.open("https://reu.byu.edu", "_blank")}
            className="bg-[var(--byu-royal)] text-white px-4 py-2 rounded-lg hover:bg-[var(--byu-royal-dark)] transition-colors"
        >
            Apply to the REU
        </button>
      <br></br>
      <h2>Program Overview</h2>
        <p>
            This year the program will run from May 11, 2026 to July 17, 2026
            </p>
            <br></br>
            <p>
                REU participants will receive:
            </p>
            <ul className="list-disc list-inside">
                <li>A $7,000* salary stipend for the 10-week program</li>
                <li>A small additional “settling-in” stipend to help with housing and initial costs</li>
                <li>Partial or full travel funding (for selected students) to present their research at a regional or national conference after the program</li>
                </ul>
        <h3>Application Details</h3>
        <p>
            Applications must be received by 11:59pm MST on February 9th, 2026 to receive full consideration.
            </p>
        <br></br>
        <p>The application will ask you for the following (not a complete list):</p>
        <ul className="list-disc list-inside">
            <li>Your GPA and your major GPA</li>
            <li>A digital transcript (we don't require an official transcript)</li>
            <li>Your top four choices of advisors/research project areas of interest and why you are interested in those areas</li>
            <li>A short paragraph on how participating in the BYU summer research program will help further your academic and career goals</li>
            <li>A short paragraph on what attracts you to our BYU program(s) in particular</li>
            <li>A short paragraph on how you can contribute in making this BYU REU summer experience an inclusive, interesting, and collaborative adventure for all</li>
            <li>A one page resume to upload with your application</li>
            <li>Contact information (email addresses) for at least two individuals who will write letters of recommendation for you. We will reach out directly to your references to ask for their letter or recommendation. Note that we must receive your letter of recommendation by Feb 29, 2026 for you to receive full consideration. Please ensure your references are willing to write a recommendation and are aware of the deadline before submitting your application.</li>
      </ul>
        <br></br>
        <h2>Timeline</h2>
        <ul className="list-disc list-inside">
            <li>Feb 9, 2026 - Applications Due</li>
            <li>February - Zoom Interviews</li>
            <li>Feb 29, 2026 - Recommendation Letters Due</li>
            <li>Mid March - First batch of offer letters sent out</li>
            <li>End of March - Request first batch of students to notify us of their decisions</li>
            <li>April - Additional offer letters sent out as needed</li>
            </ul>

            <Image src="/images/reu/reu-timeline.webp" alt="REU Timeline" width={1200} height={800} className="rounded-lg"></Image>
        <h2>Eligibility</h2>
        <p>
            Citizenship or CPT: Because the REU program is funded by the National Science Foundation, REU applicants must be U.S. citizens or permanent residents.</p>
<br></br>
<p>BYU Code of Conduct and Honor Code: BYU is a religiously affiliated university, sponsored by the Church of Jesus Christ of Latter-day Saints. As such, all applicants must agree to the Code of Conduct and the BYU Honor Code. An ecclesiastical endorsement interview will be required to explain and provide an understanding of the commitments required by the honor code. </p>
<br></br>
<p>Although BYU is owned and operated by the Church of Jesus Christ of Latter-day Saints, we welcome students of all faiths as well as students who do not associate with any religion. Matters of religion and personal faith are not used in the admissions process. </p>
<br></br>
<p>School Level: Students applying to the REU program must be currently enrolled as undergraduates at an accredited U.S. college or university and must have at least one semester to complete after the REU program is over.</p>
<br></br>
<p>BYU Visiting Student Requirements: Students admitted to the REU program must also be formally accepted by BYU as "visiting students". This requires: </p>
      
      <ul className="list-disc list-inside">
        <li>2.5 GPA or higher</li>
        <li>No criminal history</li>
        <li>Being enrolled in research credits (paid for by the REU program)</li>
        <li>Having a formal two-step interview in which you agree to abide BYU's Honor Code. See the Honor Code tab for more information.</li>
      </ul>
<br></br>
      <p>
        You are welcome to contact us to describe your specific situation if you have any other questions about eligibility; see the Contact Us tab.
      </p>
      </Container>

        <br></br>
    </>
  );
}