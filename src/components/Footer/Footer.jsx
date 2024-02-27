import React from "react";
import "./Footer.css";

function Footer() {
  const facebook_svg = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
    </svg>
  );

  const instagram_svg = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
    </svg>
  );

  const twitter_svg = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path>
    </svg>
  );

  const youtube_svg = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
    </svg>
  );
  return (
    <div className="bg-[#0f172a] border-t-2">
      <div className="max-w-[1500px] mx-auto p-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="lg:mb-0 mb-10">
            {/* logo and social icons */}
            <div className="w-40">
              <img
                src="https://deepnapsoftech.com/assets/Deepnap-Kk6_Vq1R.svg"
                className="grayscale invert"
                alt=""
              />
            </div>
            <div className="flex text-white">
              {/* social icons */}
              <div className="mx-3 text-3xl">{facebook_svg}</div>
              <div className="mx-3 text-3xl">{instagram_svg}</div>
              <div className="mx-3 text-3xl">{twitter_svg}</div>
              <div className="mx-3 text-3xl">{youtube_svg}</div>
            </div>
          </div>

          <div className="flex w-full flex-col lg:flex-row">
            <div className="flex flex-col md:flex-row justify-around w-full">
              <div className="text-slate-400">
                <h1 className="text-white text-xl">DEVELOPMENT</h1>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  Website Design
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  Logo Design
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  Web Development
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  Software Development
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  App Development
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  CRM Development
                </div>
              </div>

              <div className="text-slate-400">
                <h1 className="text-white text-xl">DIGITAL MARKETING</h1>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  Meta Ads
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  Google Ads
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  Email Marketing
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  Content Marketing
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  SEO & SEM
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  PPC
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-around">
              <div className="text-slate-400">
                <h1 className="text-white text-xl">BECOME BRAND</h1>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  Brand Building
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  Public Relations
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  ORM
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  Digital Marketing
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  Influencer Marketing
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  Social Media Presence
                </div>
              </div>

              <div className="text-slate-400">
                <h1 className="text-white text-xl">LEGAL</h1>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  Carrier
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  Book Demo
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  Privacy Policy
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  Terms & Conditions
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  App Development
                </div>
                <div className="my-2 hover:text-slate-500 cursor-pointer">
                  CRM Development
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-4 flex justify-center items-center">
          <p className="text-white text-lg p-1">All rights reserved: Deepnap Softech Powered By Dryish ERCS</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
