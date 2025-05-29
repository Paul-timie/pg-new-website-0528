import teamBonde99 from "/src/assets/images/team/team_bonde-99.png";
import team03 from "/src/assets/images/team/team-03.png";
import team04 from "/src/assets/images/team/team-04.png";
import team06 from "/src/assets/images/team/team-06.png";
import team07 from "/src/assets/images/team/team-07.png";
import team01 from "/src/assets/images/team/team-01.png";
import team05 from "/src/assets/images/team/team-05.png";
import team02 from "/src/assets/images/team/team-02.png";
import team08 from "/src/assets/images/team/team-08.png";
import team09 from "/src/assets/images/team/team-09.png";
import team10 from "/src/assets/images/team/sdqq.png";
const people = [
  {
    name: "Dr. Pramod Bonde",
    role: "Inventor, Founder & Serial Entrepreneur",
    imageUrl: teamBonde99,
  },
  {
    name: "Ed Berger",
    role: "Reimbursement Expert",
    imageUrl: team03,
  },
  {
    name: "Nisha Bhalla",
    role: "Hospital Purchasing",
    imageUrl: team04,
  },
  {
    name: "Thaddeus Coffindaffer",
    role: "Commercialization",
    imageUrl: team06,
  },
  {
    name: "Tony Allen",
    role: "CFO / M&A",
    imageUrl: team07,
  },
  {
    name: "Dr. Kurt Dasse",
    role: "Medical Device Expert with over 50 years of experience",
    imageUrl: team01,
  },
  {
    name: "Priscilla Petit",
    role: "FDA & Regulatory Expert",
    imageUrl: team05,
  },
  {
    name: "Barry Gellman",
    role: "Design Engineer with over 200 patents",
    imageUrl: team02,
  },
  {
    name: "Ahmed Mohammad",
    role: "Pacemaker / CRT Safety Expert",
    imageUrl: team08,
  },
  {
    name: "Paul Ayodele",
    role: "Chief Engineer",
    imageUrl: team09,
  },
  {
    name: "Sodiq Ajose",
    role: "Electrical Engineer",
    imageUrl: team10,
  },
  // More people...
];

export default function Teamsection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32" id="team">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The Team
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
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-300">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
