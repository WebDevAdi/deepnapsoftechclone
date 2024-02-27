import React from "react";
import { Input } from "../../components/index";

function Contact() {
  const location_svg = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      class="text-blue-400"
      height="40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path>
    </svg>
  );

  const phone_svg = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      class="text-blue-400"
      height="40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
      ></path>
    </svg>
  );

  const landline_svg = (
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="text-blue-400"
      height="40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M20 3h-2a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2z"></path>
      <path d="M16 4h-11a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h11"></path>
      <path d="M12 8h-6v3h6z"></path>
      <path d="M12 14v.01"></path>
      <path d="M9 14v.01"></path>
      <path d="M6 14v.01"></path>
      <path d="M12 17v.01"></path>
      <path d="M9 17v.01"></path>
      <path d="M6 17v.01"></path>
    </svg>
  );

  const message_svg = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      class="text-blue-400"
      height="40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l4.222 2.475c.024-.058.05-.114.08-.17.665-1.3 2.362-1.917 3.698-1.25 1.336-.667 3.033-.05 3.699 1.25a3.3 3.3 0 0 1 .08.17L16 5.713V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM0 6.873l4 2.344c-.012.542.124 1.117.416 1.694l.004.006L0 13.372v-6.5Zm.059 7.611 4.9-2.723c.563.73 1.383 1.467 2.49 2.198l.551.365.551-.365c1.107-.73 1.927-1.467 2.49-2.198l4.9 2.723A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516ZM16 13.372l-4.42-2.455.004-.006c.292-.577.428-1.152.415-1.694L16 6.873v6.5Z"></path>
      <path d="M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"></path>
    </svg>
  );
  return (
    <div className="my-20">
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row px-10">
        <div className="max-w-[840px] md:mx-0 mx-auto  grid lg:grid-cols-2 xl:grid-cols-3  gap-8">
          <div className="flex flex-col max-h-80 max-w-80 justify-center items-center border-4 border-sky-500 p-5 ">
            <div>{location_svg}</div>
            <div className="text-white font-bold text-lg text-center">
              5E/12BP, Block E, New Industrial Twp 5, New Industrial Town,
              Faridabad, Haryana 121001
            </div>
          </div>
          <div className="flex flex-col max-h-80 max-w-80 justify-center items-center border-4 border-sky-500 p-5 ">
            <div>{phone_svg}</div>
            <div className="text-white font-bold text-lg text-center">
              +91-7042707091,
              <br />
              +91-7042707092
            </div>
          </div>
          <div className="flex flex-col max-h-80 max-w-80 justify-center items-center border-4 border-sky-500 p-5 ">
            <div>{landline_svg}</div>
            <div className="text-white font-bold text-lg text-center">
              0129-400-1529
            </div>
          </div>
          <div className="flex flex-col max-h-80 max-w-80 justify-center items-center border-4 border-sky-500 p-5 ">
            <div>{message_svg}</div>
            <div className="text-white font-bold text-md text-center">
              support@deepnapsoftech.com <br />
              enquiry@deepnapsoftech.com
            </div>
          </div>
        </div>

        <div className="p-6 border-2 rounded-xl md:mx-10 gradient-background w-full lg:w-1/3 my-10 md:my-0">
          {/* contact form */}
          <h1 className="text-xl text-center font-semibold text-white py-4">
            Contact Us
          </h1>
          <div>
            {/*  */}
            <div className="my-3">
              <Input type="text" label="Name" />
            </div>
            <div className="my-3">
              <Input type="email" label="Email" />
            </div>
            <div className="my-3">
              <Input type="number" label="Phone" />
            </div>
            <div className="my-3">
              <Input type="text" label="City" />
            </div>
            <div className="my-3 ">
              <input type="submit" value={'Submit'} className="bg-gradient-to-r from-[#060922] to-[#495bc0] text-white p-2 px-8 rounded border text-sm font-bold cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
