import tieImage from "/src/assets/images/news/TiE.png";
import cttechImage from "/src/assets/images/news/CTtech.jpeg";
import swissMedtechImage from "/src/assets/images/news/swiss-medtech.png";
import asaio24Image from "/src/assets/images/news/ASAIO24.png";
import aatsImage from "/src/assets/images/news/AATS.png";
import yaleImage from "/src/assets/images/news/Yale.png";
import asaio23Image from "/src/assets/images/news/ASAIO23.png";
import acsImage from "/src/assets/images/news/ACS.jpg";
import WTNHTVImage from "/src/assets/images/news/wtnh-news.jpeg";
import ISHLT2025 from "/src/assets/images/news/ISHLT2025.png";
import { useState, useCallback } from "react";
import { X } from "lucide-react";

const newsItems = [
  {
    id: 0,
    title: "ISHLT 2025 Invitation",
    description:
      "PiroGon Inc. is proud to announce that our Lead Electrical Engineer, Paul Ayodele, will present his research at the 45th ISHLT Annual Meeting, taking place April 27-30, 2025, in Boston, Massachusetts, USA.",
    imageUrl: ISHLT2025,
    date: "April  2025",
    datetime: "2025-28-04",
    category: {
      title: "45th ISHLT Annual Meeting",
    },
    organization: {
      name: "International Society for Heart & Lung Transplantation",
      acronym: "",
    },
  },
  {
    id: 1,
    title: "Interviewed on WTNH-TV Channel 8",
    description:
      "Dr. Rigu Gupta, CEO and Founder of PiroGon, was honored to be featured on WTNH-TV Channel 8! A heartfelt thank you to the Connecticut Technology Council for their unwavering dedication to celebrating and supporting women in STEM and STEAM.",
    imageUrl: WTNHTVImage,
    date: "October 2024",
    datetime: "2024-07-10",
    category: {
      title: "WTNH-TV Interview",
    },
    organization: {
      name: "WTNH-TV Channel 8",
      acronym: "",
    },
  },
  {
    id: 0,
    title: "Won TiE New York Pitch Competition!",
    description:
      "Our CEO and Founder, Dr. Rigu Gupta, proudly won the pitch competition organized by TiE New York. TiE (https://tie.org) was established in Silicon Valley by a group of accomplished entrepreneurs, corporate leaders, and senior professionals, many of whom are alumni of the Indian Institute of Technology (IIT).",
    imageUrl: tieImage,
    date: "October 2024",
    datetime: "2024-07-10",
    category: {
      title: "Award",
    },
    organization: {
      name: "TiE New York",
      acronym: "",
    },
  },
  {
    id: 0,
    title: "19th Annual Women of Innovation",
    description:
      "Dr. Rigu Gupta, CEO and Founder of PiroGon Inc. has been honored as a 2024 Women of Innovation Finalist in the Entrepreneurial Category by the Connecticut Technology Council. This recognition celebrates her exceptional leadership and contributions to innovation in the tech industry.",
    imageUrl: cttechImage,
    date: "August 2024",
    datetime: "2024-05-01",
    category: { title: "Award" },
    organization: {
      name: "Connecticut Tech Council",
      acronym: "",
    },
  },
  {
    id: 1,
    title: "Swiss MedTech Day",
    description:
      "Invited to speak at Swiss Medtech's biggest annual event in Bern, Switzerland, June 2024.",
    imageUrl: swissMedtechImage,
    date: "June 2024",
    datetime: "2024-05-01",
    category: { title: "Conference" },
    organization: {
      name: "Swiss MedTech",
      acronym: "",
    },
  },
  {
    id: 2,
    title: "70th ASAIO Conference",
    description:
      "Awarded Innovation and Entrepreneurship award at the 70th Annual Conference of ASAIO in Baltimore.",
    imageUrl: asaio24Image,
    date: "May 2024",
    datetime: "2024-05-01",
    category: { title: "Conference" },
    organization: {
      name: "American Society for Artificial Internal Organs",
      acronym: "ASAIO",
    },
  },
  {
    id: 3,
    title: "AATS Annual Meeting Presentation",
    description:
      "Selected for podium presentation at the 104th Annual meeting of AATS in Toronto, Canada. AATS is responsible for setting the standards for lung care and how to prevent lung injury.",
    imageUrl: aatsImage,
    date: "April 2024",
    datetime: "2024-04-01",
    category: { title: "Conference" },
    organization: {
      name: "American Association of Thoracic Surgeons",
      acronym: "AATS",
    },
  },
  {
    id: 4,
    title: "Yale Faculty Innovation Award",
    description:
      "PiroGon Inc. Technology was awarded an Innovation award by President of Yale University, Peter Salovey.",
    imageUrl: yaleImage,
    date: "October 2023",
    datetime: "2023-01-01",
    category: { title: "Award" },
    organization: {
      name: "Yale University",
      acronym: "Yale",
    },
  },
  {
    id: 5,
    title: "68th ASAIO Conference",
    description:
      "Awarded MDEF (Medical Device Entrepreneurship Forum)  as the most impactful and innovative technology with wide reaching impact on patients, at the 68th ASAIO Conference.",
    imageUrl: asaio23Image,
    date: "June 2023",
    datetime: "2023-01-01",
    category: { title: "Conference" },
    organization: {
      name: "American Society for Artificial Internal Organs",
      acronym: "ASAIO",
    },
  },
  {
    id: 5,
    title: "ACS Clinical Congress",
    description:
      "Featured at the ACS clinical congress in San Diego October '22.",
    imageUrl: acsImage,
    date: "October 2022",
    datetime: "2023-01-01",
    category: { title: "Conference" },
    organization: {
      name: "American College of Surgeons",
      acronym: "ACS",
    },
  },
  // Add more news items here...
];

export default function NewsSection() {
  const [selectedItem, setSelectedItem] = useState(null);

  const openPopup = useCallback((item, event) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedItem(item);
  }, []);

  const closePopup = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            News
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Stay updated with the latest achievements and presentations from
            PiroGon Inc.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  src={item.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-3 flex items-center gap-x-4 text-xs">
                  <time dateTime={item.datetime} className="text-gray-500">
                    {item.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                    {item.category.title}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-md font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {item.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                  <button
                    onClick={(e) => openPopup(item, e)}
                    className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Read more
                  </button>
                </div>
                <div className="relative mt-5 flex items-center gap-x-4">
                  <div className="text-xs leading-6">
                    <p className="font-semibold text-gray-900">
                      {item.organization.name}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full mx-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{selectedItem.title}</h3>
              <button
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 mb-4">{selectedItem.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{selectedItem.date}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
