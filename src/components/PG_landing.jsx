import { motion } from "framer-motion";
//import Logo from "/src/assets/images/logo.png";
import pic1 from "/src/assets/images/1-pics.png";
import pic2 from "/src/assets/images/2-pics.png";
import pic3 from "/src/assets/images/3-pics.png";
import pic4 from "/src/assets/images/4-pics.png";
import pic5 from "/src/assets/images/5-pics.png";

// eslint-disable-next-line react/prop-types
const AnimatedSection = ({ imageUrl, text, isReversed, index }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: isReversed ? 50 : -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="relative isolate"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className={`mx-auto max-w-7xl px-6 py-10 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-8 ${
          isReversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        <motion.div
          variants={itemVariants}
          className="mx-auto mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"
        >
          <div className="mx-auto w-[32rem] max-w-full drop-shadow-xl">
            <img
              alt={`Image ${index + 2}`}
              src={imageUrl}
              width={640}
              height={640}
              className="w-[50rem]"
            />
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"
        >
          <h1 className="mt-4 max-w-lg text-xl font-bold tracking-tight text-gray-100 sm:text-2xl">
            {text}
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Headstart() {
  const sections = [
    {
      imageUrl: pic2,
      text: "These medications relax the valve called Lower Esophageal Sphincter (LES) which is between the food pipe and stomach",
    },
    {
      imageUrl: pic3,
      text: "When the lower valve relaxes, stomach contents back up into the esophagus",
    },
    {
      imageUrl: pic4,
      text: "And spills into the lungs and cause significant damage",
    },
    {
      imageUrl: pic5,
      text: "Causing life threatening pneumonia leading to more than 200,000 deaths every year",
    },
  ];

  return (
    <div className="bg-gray-900">
      <div className=" px-6 py-12 sm:py-32 lg:px-8 relative isolate overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div
          aria-hidden="true"
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          />
        </div>

        <div className="pb-20 mx-auto max-w-7xl ">
          {/* <div className="flex justify-center items-center mb-4">
            <img src={Logo} alt="PiroGon Inc. logo" className="w-26 h-8" /> 
            // <img
            //   src={yalelogo}
            //   alt="Yale University logo"
            //   className="w-22 h-8"
            // /> 
          </div>  */}
          <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
            <p className="mt-2 text-center text-base sm:text-4xl tracking-tight text-indigo-400 flex flex-col sm:flex-row sm:items-center">
              <span className="text-gray-300 font-bold mb-2 sm:mb-0">
                PiroGon Inc.
              </span>
              <span className="hidden sm:inline mx-2"> </span>
              <span className="mb-2 sm:mb-0">
                Novel Technology from world renowned
              </span>
              <span className="hidden sm:inline mx-2"> </span>
              <span className="text-gray-300 font-bold">Yale University</span>
            </p>
          </div>
        </div>
        {/*Intro of Problem*/}
        <div
          className="mt-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative"
          id="Aspiration"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80 rounded-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.1),transparent_50%)] rounded-3xl" />
          <div className="relative mx-auto max-w-3xl py-16 px-6 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-indigo-500/50 rounded-full" />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-white">
                  Aspiration
                </h1>
              </div>

              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-200 text-center leading-relaxed"
                >
                  Accidental inhalation of Oral & Stomach contents in the lungs
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="inline-block mx-auto px-6 py-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20"
                >
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-indigo-300 text-center">
                    7% of 35 million hospitalized at risk per year
                  </h2>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-gray-300 text-center"
                >
                  <span className="inline-block px-2">Stroke</span>
                  <span className="text-indigo-400 mx-2">•</span>
                  <span className="inline-block px-2">GLP-1</span>
                  <span className="text-indigo-400 mx-2">•</span>
                  <span className="inline-block px-2">Dementia</span>
                  <span className="text-indigo-400 mx-2">•</span>
                  <span className="inline-block px-2">After Surgery</span>
                  <span className="text-indigo-400 mx-2">•</span>
                  <span className="inline-block px-2">Trauma</span>
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Combined Sections Container */}
        <div className="relative mt-16 sm:mt-24 mb-16 sm:mb-24">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-indigo-900/20 to-gray-900/30 rounded-[2.5rem] sm:rounded-[3rem]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.15),transparent_70%)] rounded-[2.5rem] sm:rounded-[3rem]" />

          <motion.div
            className="relative mx-auto max-w-7xl py-8 sm:py-16 px-4 sm:px-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 relative">
              <style>
                {`
                  @keyframes drawCable {
                    to {
                      stroke-dashoffset: 0;
                    }
                  }
                  .cable-animate {
                    stroke-dasharray: 900;
                    stroke-dashoffset: 900;
                    animation: drawCable 1.2s cubic-bezier(0.4,0,0.2,1) forwards;
                  }
                `}
              </style>
              {/* SVG Cable Connector (only on large screens, at the top) */}
              <svg
                className="hidden lg:block absolute left-0 right-0 -top-8 z-10 pointer-events-none"
                width="100%"
                height="60"
                viewBox="0 0 800 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ pointerEvents: "none" }}
              >
                <defs>
                  <linearGradient
                    id="cableGradient"
                    x1="0"
                    y1="30"
                    x2="800"
                    y2="30"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#a78bfa" />
                  </linearGradient>
                  <filter
                    id="glow"
                    x="-10"
                    y="-10"
                    width="820"
                    height="80"
                    filterUnits="userSpaceOnUse"
                  >
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M 60 50 Q 400 0 740 50"
                  stroke="url(#cableGradient)"
                  strokeWidth="6"
                  fill="none"
                  filter="url(#glow)"
                  strokeLinecap="round"
                  className="cable-animate"
                />
              </svg>
              {/* Frequency + Pain Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-12 border border-indigo-500/10 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(79,70,229,0.1)]"
              >
                <div className="space-y-6 sm:space-y-8">
                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center"
                  >
                    <div className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-indigo-500/10 rounded-[1.5rem] border border-indigo-500/20 mb-4 sm:mb-6 shadow-[0_0_20px_rgba(79,70,229,0.15)]">
                      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-white to-indigo-200">
                        Frequency + Pain = Value
                      </h1>
                    </div>
                  </motion.div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Left Stat */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-[1.5rem] p-4 sm:p-6 border border-indigo-500/10 transform hover:scale-[1.05] active:scale-[0.95] transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.1)]"
                      style={{
                        clipPath:
                          "polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%)",
                      }}
                    >
                      <div className="space-y-2 sm:space-y-3">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-300 text-center">
                          2.5M
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300 text-center">
                          Patients Affected
                        </p>
                      </div>
                    </motion.div>

                    {/* Right Stat */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-[1.5rem] p-4 sm:p-6 border border-indigo-500/10 transform hover:scale-[1.05] active:scale-[0.95] transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.1)]"
                      style={{
                        clipPath:
                          "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%)",
                      }}
                    >
                      <div className="space-y-2 sm:space-y-3">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-400 text-center">
                          200K
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300 text-center">
                          Annual Fatalities
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-[1.5rem] p-4 sm:p-6 border border-indigo-500/20 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.15)]"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 100% 0%, 100% 100%, 85% 100%, 0% 100%)",
                    }}
                  >
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6">
                      <div className="text-center">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-300">
                          $50K
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300 mt-1">
                          per patient
                        </p>
                      </div>
                      <div className="hidden sm:block text-indigo-400 text-xl">
                        +
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-300">
                          7 Days
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300 mt-1">
                          extra stay
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Intro of Problem Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-[3rem] sm:rounded-[4rem] p-6 sm:p-8 lg:p-12 border border-indigo-500/10 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(79,70,229,0.1)] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-indigo-500/5 rounded-[3rem] sm:rounded-[4rem]" />
                <div className="relative flex items-center justify-center min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center max-w-2xl mx-auto px-4"
                  >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-white to-indigo-200 leading-relaxed">
                      Patients connected to ventilators need medications to
                      relax and tolerate a breathing tube
                    </h2>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="relative isolate pt-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-7xl px-6 py-10 sm:py-8 lg:flex lg:flex-row-reverse lg:items-center lg:gap-x-10 lg:px-8 lg:py-16"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mx-auto mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"
            >
              <div className="mx-auto w-[32rem] max-w-full drop-shadow-xl">
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  alt="Image"
                  src={pic1}
                  width={640}
                  height={640}
                  className="w-[50rem]"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"
            >
              <h1 className="mt-4 max-w-lg text-xl font-bold tracking-tight text-gray-100 sm:text-2xl">
                A serious risk of aspiration from stomach contents is faced by
                all patients undergoing breathing tube placement for ventilator
                support
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {sections.map((section, index) => (
        <AnimatedSection
          key={index}
          imageUrl={section.imageUrl}
          text={section.text}
          isReversed={index % 2 !== 0}
          index={index}
        />
      ))}

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl sm:text-center mt-10">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            This is One in 25 patients in the ICU due to such pneumonia
          </p>
        </div>
      </div>
    </div>
  );
}
