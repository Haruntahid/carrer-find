import user from "../assets/images/user.png";

function Hero() {
  return (
    <>
      <div className="flex mt-5 justify-between items-center gap-8">
        <div className="w-2/5">
          <p className="text-7xl font-extrabold">
            One Step <br /> Closer To Your <span>Dream Job</span>
          </p>
          <p className="mt-6">
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all{" "}
            <br />
            your job application from start to finish.
          </p>
          <a
            href="#_"
            className="mt-8 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Get Started
            </span>
            <span className="relative invisible">Get Started</span>
          </a>
        </div>
        <div className="w-3/5 text-center">
          <div className="flex justify-end">
            <img className="block" src={user} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
