import { FAQ } from "@/utils/types";
import Link from "next/link";

export const faqs: FAQ[] = [
  {
    question: "When and where is the conference?",
    answer: <p>June 22-26, 2026 at Brigham Young University in Provo, Utah.</p>,
  },
  {
    question: "Where will the conference be held on campus?",
    answer: (
      <p>
        The tutorials and poster presentations will be in the Engineering
        Building (EB), in the event space which is room 204. Note that the
        second floor is the ground floor as you enter from campus. The meals
        will be provided in the Wilkenson Student Center (WSC) and the Cannon
        Center (CC).
      </p>
    ),
  },
  {
    question: "Where can I fly into?",
    answer: (
      <p>
        The Salt Lake City International Airport (SLC) is the closest major
        airport, about a 45-minute drive to campus. However, the Provo Municipal
        Airport (PVU) is even closer, just a 15-minute drive, though it has
        fewer flight options.
      </p>
    ),
  },
  {
    question: "How do I get from the airport to BYU?",
    answer: (
      <>
        <p>
          If you fly into Salt Lake, there are car rental options, as well as
          ride-share services like Uber and Lyft. Be advised that it is about a
          45 minute drive from the Salt Lake airport to BYU. Another option is
          to take the train, upon arriving at the airport, follow signs to
          ground transportation. You&apos;ll find the TRAX Green Line, and take
          that 4 stops (if my memory serves me right) to the North Temple
          Bridge/Guadalupe station. From there, go north, a little less than a
          block to the North Temple Station, where you&apos;ll find the
          FrontRunner commuter train. Take the southbound train to the Provo
          station (about 75 minutes).
        </p>
        <p>
          From the Provo FrontRunner station, you can take a 10 minute Uber/Lyft
          to campus, or shorter if you are staying in a hotel or AirBNB near
          downtown. You may also catch one of the buses from the train station,
          depending on where you are staying, if you are coming straight to
          campus, consider the UVX route, as it stops right outside the
          Engineering Building.
        </p>

        <p>
          If you fly into Provo, car rental and ride share is also an option.
          Campus is about 15 minutes from the airport and downtown Provo is
          closer to 10. You can also catch the 833 bus to Provo Central Station
          and follow the above instructions for how to get to campus. Plan
          ahead, and check schedules, because some services are not available on
          Sundays.
        </p>
        <p>
          <Link
            href="https://www.rideuta.com/Rider-Tools/Schedules-and-Maps/750-FrontRunner"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.rideuta.com/Rider-Tools/Schedules-and-Maps/750-FrontRunner
          </Link>
          <br></br>
          <Link
            href="https://www.rome2rio.com/map/Provo-Central-Station/Salt-Lake-City-Airport-SLC"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.rome2rio.com/map/Provo-Central-Station/Salt-Lake-City-Airport-SLC
          </Link>
          <br></br>
          <Link
            href="https://www.rideuta.com/Rider-Tools/Schedules-and-Maps/830X-Utah-Valley-Express"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.rideuta.com/Rider-Tools/Schedules-and-Maps/830X-Utah-Valley-Express
          </Link>
          <br></br>
        </p>
      </>
    ),
  },
  {
    question: "Where do I park on campus?",
    answer: (
      <p>
        There is visitor parking in the visitor lot near the Wilkenson Student
        Center (WSC), as well as in the visitor lot near the Museum of Art
        (MoA). Here is a link to a campus parking map, click the Parking view
        from the selection menu, look for V marked slots:{" "}
        <Link
          href="https://map.byu.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://map.byu.edu/
        </Link>
      </p>
    ),
  },
  {
    question: "Where is the Engineering Building on campus?",
    answer: (
      <p>
        Almost on the Southeast corner of Campus. If you type in
        &quot;Engineering Building&quot; in your favorite Maps app, it should
        get you where you need to go. Here is a link to a campus map, look for
        EB:{" "}
        <Link
          href="https://map.byu.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://map.byu.edu
        </Link>
      </p>
    ),
  },
  {
    question: "What do the housing options look like?",
    answer: <p>Housing information will come soon!</p>,
  },
  {
    question:
      "What are some fun things the university advertise to potential students to do during our stay?",
    answer: (
      <p>
        <Link
          href="https://enrollment.byu.edu/transfer-team/10-fun-things-to-do-in-provo"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://enrollment.byu.edu/transfer-team/10-fun-things-to-do-in-provo
        </Link>
      </p>
    ),
  },
  // {
  //   question: "How do I register?",
  //   answer: "Registration opens in <Insert Date>. We'll post a link on the Home page with student rates.",
  // },
  // {
  //   question: "Will talks be recorded?",
  //   answer: "Perhaps!",
  // },
  // {
  //   question: "Will there be student housing available?",
  //   answer: "Probably! More details to come.",
  // },
  // {
  //   question: "Will there be meals provided?",
  //   answer: "Most of them during the week will be, we'll have breakfast and lunch options, and three dinners available (Mon, Wed, Thu).",
  // },
  // {
  //   question: "Will there be speaker housing available?",
  //   answer: "We will contact speakers directly about housing arrangements.",
  // },
  // {
  //   question: "How much will this cost?",
  //   answer: "I'll let you know!",
  // },
];
