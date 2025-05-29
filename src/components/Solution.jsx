import Solution_Image1 from "/src/assets/images/solution_1.png";
import Solution_Image2 from "/src/assets/images/solution_2.png";
import favicon from "/src/assets/images/favicon.png";
export default function solution() {
  return (
    <div className="bg-[#F6f5f3]" id="solution">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <img className="h-11" src={favicon} alt="PiroGon Inc." />
                <div className="mt-24 sm:mt-32 lg:mt-16"></div>
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Our solution
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  PiroGon Device stimulates swallowing muscles and stomach lower
                  valve muscles by neuromodulation, restoring their natural
                  function and strength
                  <span className="text-blue-900 font-mono ">
                    {" "}
                    backed by formidable IP portfolio
                  </span>
                  .
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/contact-us"
                    className="rounded-md bg-[#145D7A] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Invest now
                  </a>
                  <a
                    href="/contact-us"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Get in touch <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 flex flex-col lg:flex-row gap-4 justify-center items-stretch">
            <div className="flex-1 bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-indigo-100/60 p-4 sm:p-6 flex flex-col items-center">
              <div className="text-lg sm:text-xl font-bold text-[#145D7A] mb-2 text-center">
                Regaining tone of Swallowing Muscles
              </div>
              <img
                alt="Image"
                src={Solution_Image2}
                width={250}
                height={250}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-lg border border-indigo-100/40 bg-white/40 backdrop-blur-md"
              />
              <div className="mt-4 text-base sm:text-lg font-bold text-[#145D7A] text-center">
                Pharyngeal Electrical Stimulation
              </div>
            </div>
            <div className="flex-1 bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-indigo-100/60 p-4 sm:p-6 flex flex-col items-center">
              <div className="text-lg sm:text-xl font-bold text-[#145D7A] mb-2 text-center">
                Regaining tone of Stomach Valve muscles
              </div>
              <img
                alt="Image"
                src={Solution_Image1}
                width={250}
                height={250}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-lg border border-indigo-100/40 bg-white/40 backdrop-blur-md"
              />
              <div className="mt-4 text-base sm:text-lg font-bold text-[#145D7A] text-center">
                Electrical stimulation of stomach valve
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
