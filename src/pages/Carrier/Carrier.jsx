import React from "react";
import { Input } from "../../components";

function Carrier() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    return;
  };
  return (
    <div className="max-w-[1500px] mx-auto px-10 mb-40">
      <div className="text-center my-10">
        <h1 className="text-white text-5xl font-bold py-4">Career</h1>
        <p className="text-white">
          You have landed on a perfect link in accelerating your career path!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mx-10">
          {/* Image */}
          <img
            src="https://deepnapsoftech.com/assets/career-1DawF9za.png"
            alt=""
          />
        </div>

        <div className="md:w-1/2 w-full mx-10 my-10 md:my-0 md:px-10">
          {/* form */}
          <form onSubmit={handleFormSubmit}>
            <div className="border-2 rounded-xl p-3 gradient-background">
              <div className="my-2">
                <div className="my-2">
                  <label htmlFor="name" className="text-white">
                    Name
                  </label>
                </div>
                <div>
                  <input
                    id="name"
                    type="text"
                    className="bg-transparent border border-slate-500 w-full rounded p-2 bg-white bg-opacity-5 text-white"
                  />
                </div>
              </div>

              <div className="my-4">
                <div className="my-2">
                  <label htmlFor="email" className="text-white">
                    Email
                  </label>
                </div>
                <div>
                  <input
                    id="email"
                    type="email"
                    className="bg-transparent border border-slate-500 w-full rounded p-2 bg-white bg-opacity-5 text-white"
                  />
                </div>
              </div>

              <div className="my-4">
                <div className="my-2">
                  <label htmlFor="phone" className="text-white">
                    Phone
                  </label>
                </div>
                <div>
                  <input
                    id="phone"
                    type="phone"
                    className="bg-transparent border border-slate-500 w-full rounded p-2 bg-white bg-opacity-5 text-white"
                  />
                </div>

                <div className="my-4">
                  <div className="my-2">
                    <label htmlFor="designation" className="text-white">
                      Designation
                    </label>
                  </div>
                  <div>
                    <select
                      name="designation"
                      id="designation"
                      className="w-full text-white border border-slate-500 p-3 rounded bg-white bg-opacity-5"
                    >
                      <option
                        value=""
                        className="text-white text-lg bg-[#060922]"
                      >
                        Select Postition you are applying for
                      </option>
                      <option
                        value=""
                        className="text-white text-lg bg-[#060922]"
                      >
                        Web Designer
                      </option>
                      <option
                        value=""
                        className="text-white text-lg bg-[#060922]"
                      >
                        Web Developer
                      </option>
                      <option
                        value=""
                        className="text-white text-lg bg-[#060922]"
                      >
                        Software Developer
                      </option>
                      <option
                        value=""
                        className="text-white text-lg bg-[#060922]"
                      >
                        App Developer
                      </option>
                      <option
                        value=""
                        className="text-white text-lg bg-[#060922]"
                      >
                        Software Developer
                      </option>
                      <option
                        value=""
                        className="text-white text-lg bg-[#060922]"
                      >
                        Hybrid Web Developer
                      </option>
                      <option
                        value=""
                        className="text-white text-lg bg-[#060922]"
                      >
                        Sales Executive
                      </option>
                      <option
                        value=""
                        className="text-white text-lg bg-[#060922]"
                      >
                        Sales Manager
                      </option>
                      <option
                        value=""
                        className="text-white text-lg bg-[#060922]"
                      >
                        Relationship Manager
                      </option>
                      <option
                        value=""
                        className="text-white text-lg bg-[#060922]"
                      >
                        Business Analyst
                      </option>
                      
                    </select>
                  </div>
                </div>

                <div className="my-4">
                    <div className="my-2">
                        <label htmlFor="cv" className="text-white">Upload your CV (PDF or Image)</label>
                    </div>
                    <div>
                        <input type="file" accept=".pdf,image/*" className="file:text-white file:bg-transparent file:border-0 rounded text-white border w-full p-2 bg-white bg-opacity-5"/>
                    </div>
                </div>

                <div className="my-4">
                    <input type="submit" value={'SUBMIT'} className="text-sm p-2 px-10 rounded border bg-gradient-to-l from-[#495bc0] to-[#060922] text-white font-semibold" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Carrier;
