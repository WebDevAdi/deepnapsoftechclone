import React from "react";
import "./Home.css";
import {
  Achievements,
  Banner,
  BookDemo,
  DomainCards,
  InfiniteSlidingLang,
  ServicesCard,
  WhyDeepnapsoftech,
} from "../../components";

function Home() {
  return (
    <div>
      <Banner />

      <div className="max-w-[1500px] mx-auto px-10 my-5">
        <h1 className="text-white text-4xl xl:4xl font-bold">.Our Services.</h1>
        <p className="text-slate-400 my-5">
          Empowering Brands Digitally: Your Destination for Expert Website
          Design and Web Development Our Services Redefine Digital Landscapes.
        </p>
      </div>

      <div>
        <ServicesCard />
      </div>

      <div className="my-16">
        <h1 className="text-white font-bold text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl my-10">
          Boundless Solutions for Business Excellence in Every Domain
        </h1>

        <div>
          <DomainCards />
        </div>
      </div>

      <div>
        {/* fix this component as it is causing horizontal scrollbar in mobile devices */}
        <WhyDeepnapsoftech />
      </div>

      <div>
        {/* Deepnapsoftech synergy */}
        <BookDemo />
      </div>

      <div>
        <InfiniteSlidingLang />
      </div>

      <div>
        <Achievements />
      </div>
    </div>
  );
}

export default Home;
