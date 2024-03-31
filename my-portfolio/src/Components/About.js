import React from "react";
import Subtitle from "./Subtitle";

function About() {
  return (
    <div id="about">
      <div className="AboutDesc flex flex-col">
        <Subtitle>ABOUT</Subtitle>

        <p className="2xl:text-2xl my-5 lg:my-4">
          Since 2020, I've immersed myself in software development, starting as
          a <span className="text-blue-light">QA engineer</span> in{" "}
          <span className="text-blue-light">Agile methodology</span>. From
          <span className="text-blue-light"> client demos</span> to{" "}
          <span className="text-blue-light">mentoring juniors,</span> I've honed
          communication while mastering{" "}
          <span className="text-blue-light">Selenium-Java, </span>
          earning a promotion. Collaborating closely with dev teams in product
          planning/enhancement meetings, I've cultivated skills adept at code
          and conveying ideas.
        </p>
        <p className="2xl:text-2xl mt-6 lg:my-4">
          Mastering <span className="text-blue-light font-semibold">React.js, JavaScript, Redux, Tailwind CSS, Jest, Selenium,
          and Firebase</span> amidst professional endeavors fuels my passion. I'm
          primed to craft stellar web applications with unwavering dedication
          and boundless enthusiasm.
        </p>
        <p className="2xl:text-2xl mt-6 lg:my-4">
          Outside work, I indulge in dance and martial arts, seeking harmony
          between discipline and creativity. Whether optimizing code or
          perfecting a high kick, I approach each endeavor with fervor and
          commitment.
        </p>
      </div>

    </div>
  );
}

export default About;
