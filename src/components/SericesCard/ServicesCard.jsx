import React from "react";
import ServiceCard from "./ServiceCard";

function ServicesCard() {
  const card2Svg = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
      <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
    </svg>
  );

  const card1Svg = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      height="40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"
      ></path>
      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"></path>
      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"></path>
    </svg>
  );

  const card3Svg = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
    </svg>
  );

  const card4Svg = <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"></path></svg>

  const card5Svg = <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"></path></svg>

  const card6Svg = <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path></svg>
  return (
    <div className="max-w-[1500px] mx-auto px-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          svg={card1Svg}
          title={"Web Development"}
          description={
            "From e-commerce platforms to interactive web applications, our Web Development expertise transforms your digital vision into reality. We thrive on turning complex ideas into elegant solutions, utilizing the latest technologies and best practices to create websites that are robust, secure, and scalable."
          }
        />

        <ServiceCard
          svg={card2Svg}
          title={"Website Design"}
          description={
            "Responsive and user-friendly, our Website Design ensures that your platform is accessible and functional across various devices. Whether on desktop or mobile, your audience enjoys a consistent and compelling experience that fosters deeper connections and drives conversions."
          }
        />

        <ServiceCard
          svg={card3Svg}
          title={"Digital Marketing"}
          description={
            "Beyond captivating Website Design and flawless Web Development, our Digital Marketing expertise adds the final touch to your digital journey. We employ a tailored blend of SEO, PPC, and engaging content strategies to amplify your brand's visibility and impact. Together, we navigate the dynamic digital ecosystem of Faridabad & Delhi NCR."
          }
        />

        <ServiceCard
          svg={card4Svg}
          title={"Brand Building"}
          description={
            "From visual elements to messaging consistency, our Brand Building approach complements the technical prowess of Website Design and Web Development. Together, we shape a brand that not only resonates but also leaves a lasting imprint in the ever-evolving digital landscape"
          }
        />

        <ServiceCard
          svg={card5Svg}
          title={"ORM"}
          description={
            "In today's interconnected world, your online reputation is invaluable. Our Online Reputation Management services focus on building, maintaining, and enhancing your brand's image beyond Website Design and Web Development."
          }
        />

        <ServiceCard
          svg={card6Svg}
          title={"PR"}
          description={
            "Deepnap Softech proudly presents strategic Public Relations services, seamlessly fused with our core expertise in Website Design and Web Development. Ignite your online impact with resonant narratives We empower brands with excellence, creativity, and strategic prowess, forging a path to digital eminence in Faridabad & Delhi NCR."
          }
        />
      </div>
    </div>
  );
}

export default ServicesCard;
