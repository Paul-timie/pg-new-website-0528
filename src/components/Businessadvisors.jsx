import ad5 from "/src/assets/images/team/ad-5.png";
import ad9 from "/src/assets/images/team/ad-9.png";
import ad1 from "/src/assets/images/team/ad-1.png";
import ad2 from "/src/assets/images/team/ad-2.png";
import ad4 from "/src/assets/images/team/ad-4.png";
import ad3 from "/src/assets/images/team/ad-3.png";
import carolTeam from "/src/assets/images/team/Carol-team.png";
import drGeorgMatheis1 from "/src/assets/images/team/dr-georg-Matheis1.png";
import davidMeltzer from "/src/assets/images/team/David-MeltzeR.png";

const people = [
  {
    name: "Ronja, Bruhn",
    role: "CEO & Founder STIMIT, Drager",
    imageUrl: ad5,
  },
  {
    name: "Robert Kroslowitz",
    role: "President & CEO of Berlin Heart, FDA & Clinical trials specialist",
    imageUrl: ad9,
  },
  {
    name: "John Hendershot",
    role: "Global Vice President, US Sales & Marketing, Medtronic",
    imageUrl: ad1,
  },
  {
    name: "Nat Brinn​​",
    role: "Partner, VC 23​",
    imageUrl: ad2,
  },
  {
    name: "Dr. Satya Shreenivas​",
    role: "Angel Physicians Fund​",
    imageUrl: ad4,
  },
  {
    name: "Kristin King​",
    role: "Vice President, M&A, Defibtech",
    imageUrl: ad3,
  },
  {
    name: "Carol Yvette Thorney",
    role: "Healthcare Technology Acquisitions",
    imageUrl: carolTeam,
  },
  {
    name: "Dr. Georg Matheis",
    role: "Serial Entrepreneur and Lung Expert",
    imageUrl: drGeorgMatheis1,
  },
  {
    name: "David Meltzer",
    role: "Co-Founder of Sports 1 Marketing, Speaker, Author & Entrepreneur",
    imageUrl: davidMeltzer,
  },
  // More people...
];

export default function Businessadvisors() {
  return (
    <div className="bg-[#F6f5f3] py-24 sm:py-32" id="business-advisor">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Business Advisors
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p> */}
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                alt=""
                src={person.imageUrl}
                className="mx-auto h-24 w-24 rounded-full"
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
