import React from "react";
import Message from "./Message";

function WhyDeepnapsoftech() {
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
              title={"Mobile-Responsive Mastery"}
              description={
                "At Deepnap Softech, we understand the paramount importance of mobile responsiveness. Our innovative website design ensures your site captivates visitors, regardless of their chosen device."
              }
            />
          </div>
          <div className="my-10">
            <Message
              title={"Aesthetics Meets Strategy"}
              description={`Our designs are a fusion of creativity and purpose. We meticulously tailor each element to convey your brand's essence, leaving a lasting imprint on your audience.
            `}
            />
          </div>
          <div className="my-10">
            <Message
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
              title={"Mobile-Responsive Mastery"}
              description={
                "At Deepnap Softech, we understand the paramount importance of mobile responsiveness. Our innovative website design ensures your site captivates visitors, regardless of their chosen device."
              }
            />
          </div>
          <div className="my-10">
            <Message
              title={"Aesthetics Meets Strategy"}
              description={`Our designs are a fusion of creativity and purpose. We meticulously tailor each element to convey your brand's essence, leaving a lasting imprint on your audience.
            `}
            />
          </div>
          <div className="my-10">
            <Message
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
