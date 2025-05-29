import Founderimage from "/src/assets/images/team/team-8.jpg";
const FounderSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 relative isolate overflow-hidden">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-start text-gray-900 tracking-tight sm:text-4xl">
          Founder
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 relative isolate overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">
            <div className="w-full sm:w-1/3 flex justify-center">
              <div className="relative w-50 h-48 sm:w-full sm:h-auto aspect-square">
                <img
                  src={Founderimage}
                  alt="Dr. Rigu Gupta"
                  className="rounded-full w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-4 ring-[#145D7A] rounded-full"></div>
              </div>
            </div>

            <div className="w-full sm:w-2/3 text-center sm:text-left">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Dr. Rigu Gupta
              </h3>
              <h4 className="text-xl font-semibold text-[#145D7A] mb-4">CEO</h4>
              <p className="text-gray-600 text-base sm:text-lg mb-4">
                Dr. Rigu is a visionary leader with extensive experience in
                medical technology and entrepreneurship. Her innovative approach
                drives PiroGon&apos;s mission to revolutionize patient care
                through advanced neurostimulation solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
