import React from "react";
import InfoCard from "./InfoCard";
import { TeamProfile } from "../../components";

function About() {
  const medal_svg = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"></path>
    </svg>
  );

  const gaming_svg = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 640 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"></path>
    </svg>
  );

  const map_svg = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 576 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path>
    </svg>
  );

  const heart_svg = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M374.688 33.78c-40.753-.25-82.475 21.226-109.22 71.782l-7.906 14.938-8.468-14.656c-32.643-56.628-91.52-77.628-141.406-67.813C57.801 47.848 17.09 87.075 19.31 157.126c1.276 40.232 18.886 72.314 44.876 102.063 7.425-19.163 12.86-40.794 16.218-64.844l.03-.188.033-.22c3.27-17.58 16.133-28.45 29.405-29.31 1.896-.124 3.8-.046 5.688.25 14.87 2.323 27.108 17.422 24.718 36.593v.06l-.03.064c-5.195 37.19-15.408 71.8-30.72 102.125 3.552 3.154 7.14 6.32 10.782 9.5 2.316 2.018 4.72 4.062 7.063 6.092 10.018-2.448 20.884-6.123 32.313-10.812.433.697.875 1.395 1.343 2.094l9.626 14.375c-8.86 3.69-17.542 6.848-25.97 9.374 42.482 36.955 86.22 77.407 112.75 132.437 16.882-33.235 40.17-60.668 65.502-85.124-1.818-1.453-3.493-3.138-4.97-5.062-8.02-10.457-7.668-24.424-2.718-37s14.513-24.804 27.563-34.813c13.05-10.008 27.32-16.04 40.75-17.56 3.357-.38 6.713-.476 10-.22 9.74.76 18.796 4.505 24.812 12.156 19.22-17.21 36.378-34.68 49.406-53.625 17.402-25.3 27.682-52.99 26.595-87.843-1.426-45.725-22.027-80.43-50.906-101.312-1.27 10.676-4.632 21.77-9.626 33.156-.075-.05-.144-.105-.22-.155l-15.874-10.53c5.078-12.455 7.72-23.76 7.563-33.25-7.31-3.52-14.927-6.292-22.75-8.25-9.104-2.28-18.47-3.506-27.875-3.564zm13.656 53.126c3.786-.046 10.03 1.552 17.875 6.75l17.092 11.313c12.656 8.387 12.5 16.663 10.97 19.28-.766 1.308-1.8 2.333-5.126 2.5-3.325.167-9.003-1.103-16.344-5.97l-17.062-11.31c-7.25-4.806-11.08-9.825-12.625-13.532-1.545-3.708-1.003-5.742-.344-6.813.66-1.07 1.778-2.172 5.564-2.22zM113.313 124.47c21.762.174 42.915 11.463 54.562 31.5 16.498 28.38 8.087 64.472-18.313 83.03l6.375-38.844c3.358-11.243 2.193-23.783-4.218-34.812-7.748-13.327-21.324-21.163-35.657-22.156-1.076-.075-2.17-.098-3.25-.094-7.57.023-15.222 1.952-22.282 6-12.853 7.37-20.63 19.956-22.155 33.437l-8.22 39.97c-.745-1.114-1.472-2.232-2.155-3.406-17.49-30.085-7.028-68.875 23.22-86.22 9.45-5.42 19.773-8.12 30-8.374.702-.018 1.39-.037 2.093-.03zm275.937 3.155l13.25 8.75c.805.534 1.607 1.013 2.406 1.5-7.525 10.237-15.925 20.55-25.03 30.844l-13.845-12.564c8.468-9.582 16.27-19.135 23.22-28.53zm-55.563 32.188c.66-.03 1.438.025 2.375.156 3.75.522 9.684 3.023 16.657 9.343l2.686 2.437 12.5 11.344c11.25 10.196 9.845 18.36 7.938 20.72-.954 1.177-2.125 2.02-5.438 1.686-3.312-.335-8.724-2.43-15.25-8.344l-15.187-13.75c-6.445-5.84-9.47-11.383-10.44-15.28-.97-3.9-.125-5.822.69-6.782.61-.72 1.487-1.443 3.467-1.53zM110.78 183.188c-4.597.032-9.852 2.955-11.936 14.156-9.634 68.432-36.04 121.17-79.03 153.25l-.002 26.562C76.6 342.28 110.698 278.136 121.75 199c1.323-11.076-3.913-14.852-9.063-15.656-.62-.097-1.25-.16-1.906-.156zM326.595 196.5c.27.252.536.5.812.75l13.063 11.813c-7.305 6.834-14.808 13.584-22.5 20.187-3.396 2.914-6.833 5.797-10.283 8.656L295.47 223.78c3.48-2.862 6.933-5.76 10.342-8.686 7.095-6.09 14.036-12.303 20.782-18.594zm-64.563 27.063c.826-.033 1.88.104 3.25.468 3.66.972 9.278 4.17 15.44 11.282l13.405 15.47c9.94 11.476 7.583 19.42 5.406 21.53-1.087 1.055-2.376 1.764-5.624 1.032-3.248-.732-8.36-3.47-14.125-10.125l-13.436-15.47c-5.694-6.574-8.007-12.42-8.5-16.406-.494-3.987.577-5.833 1.5-6.688.46-.427 1.023-.825 1.937-1 .23-.043.476-.083.75-.094zm-11.624 34.218c.585.732 1.182 1.46 1.813 2.19l10.686 12.31c-13.854 9.792-27.824 18.895-41.687 27.064-.605-1.04-1.25-2.066-1.94-3.094l-8.81-13.125c13.187-7.64 26.598-16.143 39.936-25.344zM174.5 275.69c.928-.06 2.182.136 3.938.843 3.51 1.416 8.668 5.277 13.906 13.095l11.406 17.03c8.45 12.615 5.14 20.207 2.72 22.033-1.21.912-2.586 1.438-5.72.312s-7.88-4.465-12.78-11.78l-11.407-17c-4.84-7.227-6.408-13.328-6.407-17.345.002-4.017 1.26-5.703 2.28-6.438.512-.367 1.136-.688 2.064-.75zm214.47 29.843c-1.06.03-2.157.12-3.314.25-9.257 1.05-20.83 5.685-31.47 13.845-10.638 8.16-18.118 18.144-21.53 26.813-3.412 8.668-2.755 14.985.156 18.78 2.912 3.796 8.806 6.048 18.063 5 1.926-.217 3.964-.6 6.063-1.124-3.063-8.48-2.586-17.12 1.03-24 5.506-10.474 16.72-16.732 28.72-16.375 5.37.158 10.643 1.827 15.468 4.717.667-1.31 1.253-2.612 1.75-3.875 3.412-8.67 2.755-14.954-.156-18.75-2.183-2.845-6.042-4.846-11.75-5.218-.95-.062-1.972-.092-3.03-.063zm-3.783 41.876c-4.623.21-8.865 2.97-10.656 6.375-1.897 3.613-2.527 8.145 4.064 15.69 27.222 28.585 69.735 53.89 116.28 64.28v-25.5c-39.302-10.528-75.917-32.2-98.5-55.844-3.69-3.612-7.17-4.908-10.25-5-.31-.01-.628-.014-.937 0z"></path>
    </svg>
  );

  return (
    <div>
      <div className="max-w-[1500px] mx-auto px-10 my-20">
        <div className="flex justify-center items-center">
          <span className="h-2 w-2 rounded-full bg-sky-500 mx-3"></span>
          <h1 className="font-semibold text-4xl  text-white my-5">ABOUT US</h1>
          <span className="h-2 w-2 rounded-full bg-sky-500 mx-3"></span>
        </div>
        <p className="text-white text-xl text-center">
          Transforming Faridabad & Delhi NCR with Innovative Website Design and
          Web Development.
        </p>

        <div className="flex flex-col lg:flex-row my-16 items-center justify-center">
          <div className="text-slate-300 lg:max-w-[650px] text-lg">
            <p>
              Welcome to Deepnap Softech, a driving force in digital evolution
              and innovation based in Faridabad & Delhi NCR. Our focus on
              website design and web development serves as a catalyst for
              businesses, bridging the gap between creativity and technology to
              transform digital landscapes. As we journey together, know that
              our destination is your digital triumph. It's a place where your
              brand shines brightly, your message resonates powerfully, and your
              goals are realized with precision. We invite you to join us on
              this transformative expedition, where the horizon is limitless,
              and the opportunities are boundless. Together, we'll uncover new
              horizons, navigate uncharted waters, and ultimately transform
              possibilities into the palpable reality of your digital success.
            </p>
          </div>
          <div>
            <img src="https://deepnapsoftech.com/images/about.png" alt="" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="mx-10">
            <div className="my-10">
              <InfoCard
                svg={medal_svg}
                title={"Our Vision"}
                description={`At Deepnap Softech, our vision is clear—to create a digital world where innovation knows no bounds. We envision a future where every business, regardless of size, harnesses the power of a strong online presence. Leveraging our prowess in website design, web development, digital marketing, brand building, online reputation management, software development, and e-commerce website development, we intricately weave a tapestry of services that not only enhance your online presence but also elevate your brand's identity, we are committed to making this vision a reality.`}
              />
            </div>
            <div className="my-10">
              <InfoCard
                svg={gaming_svg}
                title={"Our Mission"}
                description={`Our mission is to serve as the dynamic bridge between boundless creativity and cutting-edge technology. With a comprehensive approach encompassing captivating website design, seamless web development, strategic digital marketing, robust brand building, meticulous online reputation management, innovative software development, and transformative e-commerce website development, we channel our efforts into bringing your unique ideas to life. Our ultimate goal is to craft immersive digital experiences that not only capture attention but also deeply engage, leaving an indelible and resonating impact on your audience's hearts and minds.`}
              />
            </div>
          </div>
          <div className="mx-10">
            <div className="my-10">
              <InfoCard
                svg={map_svg}
                title={"Our Approach"}
                description={`Partnering with us means unlocking a world of possibilities. Experience the convenience and At Deepnap Softech, our approach to tackling challenges in the dynamic digital landscape is a harmonious blend of innovation, expertise, and strategic thinking. We pride ourselves on a multidimensional approach that marries the realms of website design, web development, digital marketing, brand building, and more, to sculpt forward-thinking solutions that seamlessly adapt to the ever-evolving needs of our diverse clientele. Our journey begins by immersing ourselves in your challenges. We don't just see isolated issues; we view the bigger picture, understanding how each element intersects and impacts the other.`}
              />
            </div>
            <div className="my-10">
              <InfoCard
                svg={heart_svg}
                title={`Our Core Services`}
                description={`Our spectrum of services represents the pulse of modern business transformation. Through captivating website design and seamless web development, we craft the foundation of your digital presence. With Digital Marketing strategies that resonate and brand building that forges lasting identities, we shape your digital narrative. Our mastery in Online Reputation Management safeguards your image while Software Development creates tailored solutions that drive efficiency. Finally, E-Commerce Website Development redefines the online marketplace, putting your products and services in the global spotlight.`}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center">
            <span className="h-2 w-2 rounded-full bg-sky-500 mx-3"></span>
            <h1 className="font-semibold text-4xl  text-white my-5">
              WHY CHOOSE US
            </h1>
            <span className="h-2 w-2 rounded-full bg-sky-500 mx-3"></span>
          </div>
        </div>

        <div className="flex items-center flex-col md:flex-row">
          <div>
            <img src="https://deepnapsoftech.com/images/about1.png" alt="" />
          </div>
          <div className="md:max-w-[500px] lg:max-w-[750px]">
            <div className="my-10">
              <h1 className="text-white text-3xl lg:text-5xl">
                Why Our Customers Choose{" "}
                <span className="text-sky-500">Working</span> With Us
              </h1>
            </div>
            <div>
              <p className="text-justify text-slate-400 text-lg">
                We don't believe in one-size-fits-all solutions. Our clients
                choose us because we listen, understand, and craft tailored
                solutions that align precisely with their unique goals,
                challenges, and aspirations. From inception to execution, our
                comprehensive suite of services empowers clients to find
                everything they need under one roof. Our holistic expertise
                covers everything from web development to digital marketing,
                making us a one-stop solution hub. With us, clients discover a
                collaborative journey that leads to digital growth, innovation,
                and a future where their success knows no bounds.
              </p>
            </div>
          </div>
        </div>

        <div className="my-20">
          <div className="flex my-10">
            <div className="font-bold text-sky-500 text-5xl mx-4">01.</div>
            <div>
              <div className="text-white text-2xl my-2">
                Latest Technologies
              </div>
              <div className="text-slate-400">
                Explore a realm of innovation with Deepnap Softech. Our
                expertise spans across a spectrum of the latest technologies
                including REACT JS, VUE JS, NEXT JS, EXPRESS JS, NODE JS, MONGO
                DB, FLUTTER & DART, and WORDPRESS. We're not just about code -
                we specialize in Responsive Web Design, Web Components, Graphics
                Designing, and the art of Digital Marketing. From SEO to SMO,
                and even software development, we harness these tools to craft
                digital solutions that stand as a testament to technology's
                transformative power.
              </div>
            </div>
          </div>
          <div className="flex my-10">
            <div className="font-bold text-sky-500 text-5xl mx-4">02.</div>
            <div>
              <div className="text-white text-2xl my-2">Unique Solutions</div>
              <div className="text-slate-400">
                At Deepnap Softech, we're not confined by templates. We
                specialize in understanding your vision and molding designs to
                match your demand. Our commitment to Unique Solutions means that
                your digital footprint will be as distinctive as your business
                itself. Share your ideas, and we'll shape them into a digital
                reality that's uniquely yours.
              </div>
            </div>
          </div>
          <div className="flex my-10">
            <div className="font-bold text-sky-500 text-5xl mx-4">03.</div>
            <div>
              <div className="text-white text-2xl my-2">
                Powerful Strategies
              </div>
              <div className="text-slate-400">
                Choosing us means gaining access to a holistic digital
                ecosystem. We seamlessly integrate "Website Design," "Web
                Development," "Digital Marketing," "Brand Building," “Public
                Relations”, “Online Reputation Management “and more, offering a
                comprehensive suite of services that work in harmony to elevate
                your brand and online presence.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <button className="p-3 px-10 bg-sky-500 text-white text-xl rounded-tr-2xl rounded-bl-2xl">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className="my-20 bg-[#101c36] px-10">
        <div className="max-w-[1500px] mx-auto">
          {/* Meet our team */}
          <div>
            <h1 className="text-5xl font-bold text-center text-[#cbd5e1] my-12 py-10">
              Meet Our Team
            </h1>
          </div>
          <div className="flex justify-around flex-wrap">
            <div className="py-10 my-5 xl:my-0">
              <div>
                <TeamProfile memberName={"Deepak Sharma"} designation={"CEO"} profileImage={"https://deepnapsoftech.com/images/teams/deepak.webp"}/>
              </div>
            </div>
            <div className="py-10 my-5 xl:my-0">
              <div>
                <TeamProfile memberName={"Pankaj Kumar Shukla"} designation={"CTO"} profileImage={"https://deepnapsoftech.com/images/teams/pankajshukla.webp"}/>
              </div>
            </div>
            <div className="py-10 my-5 xl:my-0">
              <div>
                <TeamProfile memberName={"Yatish Sharma"} designation={"CMO"} profileImage={"https://deepnapsoftech.com/images/teams/yatish.webp"}/>
              </div>
            </div>
            <div className="py-10 my-5 xl:my-0">
              <div>
                <TeamProfile memberName={"Kiara Chauhan"} designation={"HR"} profileImage={"https://deepnapsoftech.com/images/teams/kiara.webp"}/>
              </div>
            </div>
            <div className="py-10 my-5 xl:my-0">
              <div>
                <TeamProfile memberName={"Pankaj Kumar"} designation={"Full Stack Developer"} profileImage={"https://deepnapsoftech.com/images/teams/pankaj.webp"}/>
              </div>
            </div>
            <div className="py-10 my-5 xl:my-0">
              <div>
                <TeamProfile memberName={"Devesh Bisht"} designation={"Frontend Developer"} profileImage={"https://deepnapsoftech.com/images/teams/devesh.webp"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
