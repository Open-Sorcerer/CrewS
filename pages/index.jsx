import Head from "next/head";
import Image from "next/image";
import CreateForm from "../components/CreateForm";

import SplineObj from "../components/SplineObj";
const Home = (props) => {
  const { isAuthenticated } = props;
  return (
    <div>
      <Head>
        <title>FEVM Asset Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!isAuthenticated ?
        <>
          <div className="h-screen">
            {/* <SplineObj scene={"scene.splinecode"} /> */}
            {/* <SplineObj scene={'https://prod.spline.design/DxJImpAG0NRWpxwQ/scene.splinecode'} /> */}
          </div><div className="h-fit w-full lg:w-1/2 xl:w-1/4 absolute left-2 sm:left-32 top-2 sm:top-10 z-100 text-white flex flex-col gap-5 sm:gap-6 bg-black/10 backdrop-blur-md rounded-lg p-3 sm:p-10 ">
            <div className="ml-16 sm:ml-0 text-3xl md:text-4xl xl:text-5xl text-purple-900 bold md:mb-10">
              CrewS DataDAO
            </div>
            <p className="text-black text-xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            </p>
          </div>
        </>
        :
        <CreateForm />
      }
      <footer className="bg-quaternary w-full h-fit sticky z-50 bottom-0">
        <div className="max-w-7xl mx-auto p-1 overflow-hidden">
          <h1 className="text-xl text-white">Made with ❤️ for EthIndia</h1>
        </div>
      </footer>
    </div>
  );
};

export default Home;

// fdeab1
