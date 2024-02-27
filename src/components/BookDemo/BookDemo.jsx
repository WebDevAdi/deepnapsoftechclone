import React from "react";
import Message from "../Message";
import Input from "../Input/Input";

function BookDemo() {
  const svg1 = (
    <p className="border rounded-full p-2 border-sky-500 text-2xl">
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M14 11s6.054 -1.05 6 -4.5c-.038 -2.324 -2.485 -3.19 -3.016 -1.5c0 0 -.502 -2 -2.01 -2c-1.508 0 -2.984 3 -.974 8z"></path>
        <path d="M13.98 11s6.075 -1.05 6.02 -4.5c-.038 -2.324 -2.493 -3.19 -3.025 -1.5c0 0 -.505 -2 -2.017 -2c-1.513 0 -3 3 -.977 8z"></path>
        <path d="M13 13.98l.062 .309l.081 .35l.075 .29l.092 .328l.11 .358l.061 .188l.139 .392c.64 1.73 1.841 3.837 3.88 3.805c2.324 -.038 3.19 -2.493 1.5 -3.025l.148 -.045l.165 -.058a4.13 4.13 0 0 0 .098 -.039l.222 -.098c.586 -.28 1.367 -.832 1.367 -1.777c0 -1.513 -3 -3 -8 -.977z"></path>
        <path d="M10.02 13l-.309 .062l-.35 .081l-.29 .075l-.328 .092l-.358 .11l-.188 .061l-.392 .139c-1.73 .64 -3.837 1.84 -3.805 3.88c.038 2.324 2.493 3.19 3.025 1.5l.045 .148l.058 .165l.039 .098l.098 .222c.28 .586 .832 1.367 1.777 1.367c1.513 0 3 -3 .977 -8z"></path>
        <path d="M11 10.02l-.062 -.309l-.081 -.35l-.075 -.29l-.092 -.328l-.11 -.358l-.128 -.382l-.148 -.399c-.658 -1.687 -1.844 -3.634 -3.804 -3.604c-2.324 .038 -3.19 2.493 -1.5 3.025l-.148 .045l-.164 .058a4.13 4.13 0 0 0 -.1 .039l-.22 .098c-.588 .28 -1.368 .832 -1.368 1.777c0 1.513 3 3 8 .977z"></path>
      </svg>
    </p>
  );

  const svg2 = (
    <p className="border rounded-full p-2 border-sky-500 text-2xl">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m21.857 8.485-3-5A.997.997 0 0 0 18 3h-4.586l-.707-.707a.999.999 0 0 0-1.414 0L10.586 3H6a.997.997 0 0 0-.857.485l-3 5A1.001 1.001 0 0 0 2.002 9H2v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9h-.002c0-.178-.046-.356-.141-.515zM20 18h-6v-4h-4v4H4v-8h2.414l.293-.293 2-2L12 4.414l4.293 4.293 1 1 .293.293H20v8z"></path>
        <circle cx="11.895" cy="9.895" r="2.105"></circle>
        <path d="M6 12h2v3H6zm10 0h2v3h-2z"></path>
      </svg>
    </p>
  );

  const svg3 = (
    <p className="border rounded-full p-2 border-sky-500 text-2xl">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        role="img"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title></title>
        <path d="M10.537.904L6.602 12.04l4.798.037-3.748 11.018v.002L17.996 8.39h-5.022L17.847.903h-3.824zM6.903 4.91a.585.585 0 0 0-.412.17L.155 11.285a.682.682 0 0 0 0 .865l6.448 6.396a.625.625 0 0 0 .824 0 .638.638 0 0 0 0-.865l-5.436-5.53a.641.641 0 0 1 0-.865l5.324-5.344a.574.574 0 0 0 0-.865.586.586 0 0 0-.412-.169zm10.193 0a.585.585 0 0 0-.412.17.572.572 0 0 0 0 .864l5.435 5.343a.64.64 0 0 1 0 .866l-5.548 5.53a.64.64 0 0 0 0 .865.625.625 0 0 0 .824 0l6.45-6.396a.68.68 0 0 0 0-.865l-6.337-6.208a.585.585 0 0 0-.412-.169z"></path>
      </svg>
    </p>
  );

  const svg4 = (
    <p className="border rounded-full p-2 border-sky-500 text-2xl">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 32v128h128V32H0zm120 120H8V40h112v112zm40-120v128h128V32H160zm120 120H168V40h112v112zm40-120v128h128V32H320zm120 120H328V40h112v112zM0 192v128h128V192H0zm120 120H8V200h112v112zm40-120v128h128V192H160zm120 120H168V200h112v112zm40-120v128h128V192H320zm120 120H328V200h112v112zM0 352v128h128V352H0zm120 120H8V360h112v112zm40-120v128h128V352H160zm120 120H168V360h112v112zm40-120v128h128V352H320z"></path>
      </svg>
    </p>
  );

  return (
    <div className="my-10 gradient-background">
      <div className="max-w-[1500px] mx-auto px-10  py-10">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white">
            The Deepnap Softech Synergy
          </h1>
          <p className="text-slate-400 font-bold my-6">
            Where Design Meets Developments
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="max-w-[700px] text-lg">
            {/* content */}
            <div className="my-10">
              <Message
                title={`Branding Elegance`}
                description={`Your website is more than a digital address; it's an extension of your brand's identity. Our designers meticulously infuse your brand's essence into every design element, from color palettes to typography, ensuring a cohesive and memorable brand experience.`}
                svg={svg1}
              />
            </div>
            <div className="my-10">
              <Message
                title={`User-Centric Intuition`}
                description={`Intuitive design is at the core of exceptional user experiences. Deepnap Softech crafts user-centric interfaces that effortlessly guide visitors through your digital ecosystem, transforming casual browsers into engaged enthusiasts.`}
                svg={svg2}
              />
            </div>
            <div className="my-10">
              <Message
                title={`Design-Driven Functionality`}
                description={`Visual storytelling has the power to evoke emotions. Our designers strategically incorporate graphics and imagery that resonate with your target audience, forging a powerful emotional connection that lingers long after they've left your site.`}
                svg={svg3}
              />
            </div>
            <div className="my-10">
              <Message
                title={`User Experience Elevation`}
                description={`Our synergy ensures that captivating design never compromises seamless functionality. Every user interaction is carefully crafted, fostering engagement while effortlessly guiding visitors toward key touchpoints.`}
                svg={svg4}
              />
            </div>
          </div>
          <div className="w-full lg:p-16">
            <div className="border-2 rounded-lg p-5 w-full h-fit lg:mx-10 gradient-background">
              {/* book demo form */}

              <div className="text-3xl text-white whitespace-nowrap text-center my-4">
                Booking Demo
              </div>
              <div className="my-3">
                <Input label={`Name`} type={`text`} />
              </div>
              <div className="my-3">
                <Input label={`Email`} type={`email`} />
              </div>
              <div className="my-3">
                <Input label={`Phone`} type={`number`} />
              </div>
              <div className="my-3">
                <Input label={`City`} type={`text`} />
              </div>
              <div className="flex flex-col my-2">
                <label
                  htmlFor="requirement"
                  className="text-slate-500 font-semibold text-lg py2"
                >
                  Requirement
                </label>
                <select
                  name="requirement"
                  id="requirement"
                  className="p-2 rounded bg-transparent border border-slate-500 text-white lowercase"
                >
                  <option
                    value=""
                    className="bg-[#060922] text-lg capitalize text-white"
                  >
                    Select a requirement
                  </option>
                  <option
                    value=""
                    className="bg-[#060922] text-lg capitalize text-white"
                  >
                    Static Web Development
                  </option>
                  <option
                    value=""
                    className="bg-[#060922] text-lg capitalize text-white"
                  >
                    Dynamic Web Developmentt
                  </option>
                  <option
                    value=""
                    className="bg-[#060922] text-lg capitalize text-white"
                  >
                    E-Commerce Web Development
                  </option>
                  <option
                    value=""
                    className="bg-[#060922] text-lg capitalize text-white"
                  >
                    Crm Development
                  </option>
                  <option
                    value=""
                    className="bg-[#060922] text-lg capitalize text-white"
                  >
                    Appointment Booking Web Develoment
                  </option>
                  <option
                    value=""
                    className="bg-[#060922] text-lg capitalize text-white"
                  >
                    Digital Marketing
                  </option>
                  <option
                    value=""
                    className="bg-[#060922] text-lg capitalize text-white"
                  >
                    Online Reputation Management
                  </option>
                </select>
                <input
                  type="submit"
                  value={"submit"}
                  className="uppercase text-sm text-white font-semibold p-3 px-6 border rounded bg-gradient-to-l from-[#495bc0] to-[#060922] my-4 cursor-pointer "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDemo;
