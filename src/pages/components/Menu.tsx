import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Home = dynamic(() => import("./Home"));
const About = dynamic(() => import("./About"));
const PhotoGallery = dynamic(() => import("./PhotoGallery"));
const Projects = dynamic(() => import("./Projects"));
const Contact = dynamic(() => import("./Contact"));

import styles from "../styles/Menu.module.scss";
import hamburger from "../images/menu.svg";

const Menu = function () {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(-1);

  function setCurrent(index: number) {
    if (index != currentIdx) {
      setPrevIdx(currentIdx);
      setCurrentIdx(index);
    }
  }

  const data = [
    <Home key="home" setCurrent={setCurrent} />,
    <About key="about" />,
    <PhotoGallery key="gallery"/>,
    <Projects key="projects" />,
    <Contact key="contact" setCurrent={setCurrent} />,
  ];

  function checkURL() {
    if (window.location.href.endsWith("#about")) {
      setCurrent(1);
    } else if (window.location.href.endsWith("#photography")) {
      setCurrent(2);
    } else if (window.location.href.endsWith("#projects")) {
      setCurrent(3);
    } else if (window.location.href.endsWith("#contact")) {
      setCurrent(4);
    } else if (
      window.location.href.endsWith("#") ||
      window.location.href.endsWith("") ||
      window.location.href.endsWith("/") ||
      window.location.href.endsWith("/#")
    ) {
      setCurrent(0);
    } else {
        setCurrent(0);
    }
  }

  useEffect(() => {
    checkURL();
  });

  return (
    <div className="z-50">
      <div className="absolute right-4 top-3 z-50 h-12 w-14 hover:cursor-pointer">
        {currentIdx != 0 ? (
          <a href="#" onClick={() => setCurrent(0)}>
            <Image
              src={hamburger as string}
              alt="hamburger"
              width={50}
              height={50}
              loading="lazy"
            />
          </a>
        ) : null}
      </div>
      <div className={styles.scaleIn} key={currentIdx}>
        {data[currentIdx]}
      </div>
      <div className={styles.scaleOut} key={prevIdx}>
        {data[prevIdx]}
      </div>
    </div>
  );
};

export default Menu;
