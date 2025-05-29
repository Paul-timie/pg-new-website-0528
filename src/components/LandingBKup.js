import Logo from "/src/assets/images/logo.png";
import yalelogo from "/src/assets/images/Yale3.jpg";
import pic1 from "/src/assets/images/1-pics.png";
import pic2 from "/src/assets/images/2-pics.png";
import pic3 from "/src/assets/images/3-pics.png";
import pic4 from "/src/assets/images/4-pics.png";
import pic5 from "/src/assets/images/5-pics.png";
import { motion } from "framer-motion";

export default function Headstart() {
  return (
    <div className="bg-gray-900  ">
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
          <div className="flex justify-center items-center mb-4">
            <img src={Logo} alt="PiroGon Inc. logo" className="w-26 h-8" />
            <img
              src={yalelogo}
              alt="Yale University logo"
              className="w-22 h-8"
            />
          </div>
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
        <div
          className="mt-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          id="problem"
        >
          <div className="mx-auto max-w-2xl">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-center">
              Patients connected to ventilators need medications to relax and
              tolerate a breathing tube
            </p>
          </div>
        </div>
        <div className="relative isolate pt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-7xl px-6 py-10 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-16"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
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
      <div className="relative isolate ">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-8">
          <div className="mx-auto mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className="mx-auto w-[32rem] max-w-full drop-shadow-xl">
              <img
                alt="Image"
                src={pic2}
                width={640}
                height={640}
                className="w-[50rem] "
              />
            </div>
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-4 max-w-lg text-xl font-bold tracking-tight text-gray-100 sm:text-2xl">
              These medications relax the valve called Lower Esophageal
              Sphincter (LES) which is between the food pipe and stomach
            </h1>
          </div>
        </div>
      </div>
      <div className="relative isolate ">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-8">
          <div className="mx-auto mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className="mx-auto w-[32rem] max-w-full drop-shadow-xl">
              <img
                alt="Image"
                src={pic3}
                width={640}
                height={640}
                className="w-[50rem] "
              />
            </div>
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-4 max-w-lg text-xl font-bold tracking-tight text-gray-100 sm:text-2xl">
              When the lower valve relaxes, stomach contents back up into the
              esophagus
            </h1>
          </div>
        </div>
      </div>
      <div className="relative isolate ">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-8">
          <div className="mx-auto mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className="mx-auto w-[32rem] max-w-full drop-shadow-xl">
              <img
                alt="Image"
                src={pic4}
                width={640}
                height={640}
                className="w-[50rem] "
              />
            </div>
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-4 max-w-lg text-xl font-bold tracking-tight text-gray-100 sm:text-2xl">
              And spills into the lungs and cause significant damage
            </h1>
          </div>
        </div>
      </div>
      <div className="relative isolate ">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-8">
          <div className="mx-auto mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className="mx-auto w-[32rem] max-w-full drop-shadow-xl">
              <img
                alt="Image"
                src={pic5}
                width={640}
                height={640}
                className="w-[50rem] "
              />
            </div>
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-4 max-w-lg text-xl font-bold tracking-tight text-gray-100 sm:text-2xl">
              Causing life threatening pneumonia leading to more than 200,000
              deaths every year
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl sm:text-center mt-10">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Everything you need
          </h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            This is One in 25 patients in the ICU due to such pneumonia
          </p>
        </div>
      </div>
    </div>
  );
}
