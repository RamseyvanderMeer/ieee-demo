import React from "react";
import Typewriter from "typewriter-effect";
import home from "../styles/Home.module.scss";

const settings = {
  strings: ["Student", "Developer", "Photographer"],
  autoStart: true,
  loop: true,
};

interface HomeProps {
  setCurrent: (current: number) => void;
}

const Home = function ({ setCurrent }: HomeProps) {
  return (
    <div className=" absolute left-0 top-0 z-10 flex h-screen w-screen flex-col items-center justify-center overflow-scroll text-white">
      <h1 className={home.content}>
        Hey 👋 I&apos;m{<br />}Ramsey,{<br />}
        <div className={home.text}>
          <Typewriter options={settings} />
        </div>
      </h1>
      <div className={home.sectionContainer}>
        <a
          href="#about"
          onClick={() => void setCurrent(1)}
          className={home.section}
        >
          About 🙋🏻‍♂️
        </a>
        <a
          href="#photography"
          onClick={() => void setCurrent(2)}
          className={home.section}
        >
          Photos 📸
        </a>
        <a
          href="#projects"
          onClick={() => void setCurrent(3)}
          className={home.section}
        >
          Projects 👨🏻
        </a>
        <a
          href="#contact"
          onClick={() => void setCurrent(4)}
          className={home.section}
        >
          Contact ✉️
        </a>
      </div>
    </div>
  );
};

export default Home;
