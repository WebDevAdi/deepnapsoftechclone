import React from 'react'

function NavItems() {
  return (
    <div>
      <div className="flex ">
          {/* Nav items container */}
          <div className="flex items-center text-nowrap">
            <div className="mx-4 font-bold">HOME</div>
            <div className="mx-4 font-bold flex items-center">
              <div>DEVELOPMENT</div>
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  class="ml-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
              </div>
            </div>
            <div className="mx-4 font-bold flex items-center">
              <div>DIGITAL MARKETING</div>
              <div>
              <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  class="ml-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
              </div>
            </div>
            <div className="mx-4 font-bold flex items-center">
              <div>BECOME A BRAND</div>
              <div>
              <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  class="ml-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
              </div>
            </div>
            <div className="mx-4 font-bold">PORTFOLIO</div>
            <div className="mx-4 font-bold">ABOUT US</div>
            <div className="mx-4 font-bold">CONTACT US</div>
            {/* <div className="mx-4 font-bold w-0.5 h-1/2 bg-white"></div> */}
          </div>
         
        </div>
    </div>
  )
}

export default NavItems
