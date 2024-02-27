import React from "react";
import Message from "../Message";

function WhyDeepnapsoftech() {
  const svg = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M10 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm8.5-2l1.09-2.41L22 5.5l-2.41-1.09L18.5 2l-1.09 2.41L15 5.5l2.41 1.09L18.5 9zm2.78 3.72L20.5 11l-.78 1.72-1.72.78 1.72.78.78 1.72.78-1.72L23 13.5l-1.72-.78zM16.25 14c0-.12 0-.25-.01-.37l1.94-1.47-2.5-4.33-2.24.94c-.2-.13-.42-.26-.64-.37L12.5 6h-5l-.3 2.41c-.22.11-.43.24-.64.37l-2.24-.95-2.5 4.33 1.94 1.47c-.01.12-.01.25-.01.37s0 .25.01.37l-1.94 1.47 2.5 4.33 2.24-.94c.2.13.42.26.64.37l.3 2.4h5l.3-2.41c.22-.11.43-.23.64-.37l2.24.94 2.5-4.33-1.94-1.47c.01-.11.01-.24.01-.36zm-1.42 3.64l-1.73-.73c-.56.6-1.3 1.04-2.13 1.23L10.73 20H9.27l-.23-1.86c-.83-.19-1.57-.63-2.13-1.23l-1.73.73-.73-1.27 1.49-1.13c-.12-.39-.18-.8-.18-1.23 0-.43.06-.84.18-1.23l-1.49-1.13.73-1.27 1.73.73c.56-.6 1.3-1.04 2.13-1.23L9.27 8h1.47l.23 1.86c.83.19 1.57.63 2.13 1.23l1.73-.73.73 1.27-1.49 1.13c.12.39.18.8.18 1.23 0 .43-.06.84-.18 1.23l1.49 1.13-.73 1.29z"></path>
    </svg>)
  return (
    <div className="max-w-[1500px] mx-auto px-10">
      {/* Why deepnapsoftech */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center my-10">
        Why Deepnap Softech for Website Design & Web Development?
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div>
          <div className="my-10">
            <Message
            svg={svg}
              title={"Mobile-Responsive Mastery"}
              description={
                "At Deepnap Softech, we understand the paramount importance of mobile responsiveness. Our innovative website design ensures your site captivates visitors, regardless of their chosen device."
              }
            />
          </div>
          <div className="my-10">
            <Message
            svg={svg}
              title={"Aesthetics Meets Strategy"}
              description={`Our designs are a fusion of creativity and purpose. We meticulously tailor each element to convey your brand's essence, leaving a lasting imprint on your audience.
            `}
            />
          </div>
          <div className="my-10">
            <Message
            svg={svg}
              title={"Conversion-Centric Approach"}
              description={`Your website's success hinges on conversions. Our designs are strategically structured to guide users seamlessly towards your desired actions, boosting your conversion rates.`}
            />
          </div>
        </div>

        <div className="flex justify-center px-16">
          {/* slider */}
          <div className=" slidshow  bg-no-repeat bg-contain bg-[url('https://www.webserviceprovider.in/images/phone-white.png')]">
            <div className="flex overflow-hidden">
              <div className="shrink-0 p-[4.5rem] relative -top-[25px] -left-[35px]"><img className="" src="https://deepnapsoftech.com/assets/m%20(1)-bLQ-7Ehy.png" alt="" /></div>  
             
              <div className="shrink-0  p-12"><img src="https://deepnapsoftech.com/assets/m%20(2)-DMzjJw3X.png hidden" alt="" /></div>  
              <div className="shrink-0  p-12"><img src="https://deepnapsoftech.com/assets/m%20(3)-zb7ANhTX.png hidden" alt="" /></div>  
              <div className="shrink-0 hidden"><img src="https://deepnapsoftech.com/assets/m%20(4)-Rx4LTNRD.png" alt="" /></div>  
              <div className="shrink-0 hidden"><img src="https://deepnapsoftech.com/assets/m%20(5)-suc-riyg.png" alt="" /></div>  
            </div>
          </div>
        </div>

        <div>
          <div className="my-10">
            <Message
            svg={svg}
              title={"Mobile-Responsive Mastery"}
              description={
                "At Deepnap Softech, we understand the paramount importance of mobile responsiveness. Our innovative website design ensures your site captivates visitors, regardless of their chosen device."
              }
            />
          </div>
          <div className="my-10">
            <Message
            svg={svg}
              title={"Aesthetics Meets Strategy"}
              description={`Our designs are a fusion of creativity and purpose. We meticulously tailor each element to convey your brand's essence, leaving a lasting imprint on your audience.
            `}
            />
          </div>
          <div className="my-10">
            <Message
            svg={svg}
              title={"Conversion-Centric Approach"}
              description={`Your website's success hinges on conversions. Our designs are strategically structured to guide users seamlessly towards your desired actions, boosting your conversion rates.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyDeepnapsoftech;
