import React, { useState } from "react";
import Image from "next/image";

import about from "../styles/About.module.scss";
import ramsey from "../images/Ramsey.svg";
import vanderMeer from "../images/vanderMeer.svg";
import repeat from "../images/replay.svg";

export default function About() {
  const [intro, setIntro] = useState(0);
  const [svg, setSvg] = useState(1);
  const [crawl, setCrawl] = useState(2);
  const [replay, setReplay] = useState(false);

  function reset() {
    setIntro(intro + 1);
    setSvg(svg + 1);
    setCrawl(crawl + 1);
    setReplay(true);
  }

  return (
    <div className="t-0 l-0 absolute h-screen w-screen">
      <div
        id="about"
        className="absolute m-0 h-screen w-screen overflow-hidden p-0"
      >
        <section
          key={intro}
          className="absolute flex h-screen w-screen items-center justify-center border-slate-100"
        >
          <p className={about.introText}>
            Not so long ago, in a university,
            <br /> not so far away....
          </p>
        </section>

        <section key={svg} className={about.svg}>
          <Image
            priority
            src={ramsey as string}
            height={100}
            width={600}
            alt="ramsey"
            className="opacity-1 h-auto w-screen"
          />
          <Image
            priority
            src={vanderMeer as string}
            height={100}
            width={1200}
            alt="van der meer"
            className={about.logoSvg}
          />
        </section>

        <div key={crawl} className={about.crawl}>
          <div className={about.content}>
            <p className={about.title}>Year II</p>
            <p className={about.subtitle}>The Learning Continues . . .</p>
            <br />
            <p className={about.text}>
              Hello! I&apos;m a sceond year student studying computer
              engineering at the University of Illinois Urbana Champaign. I am
              an aspiring coder, and love to challenge myself to learn about new
              and exiting technologies as well as hone my existing skills. This
              summer I will be working as a software engineering intern at
              SpaceX and hope to learn a lot through this amazing experience.
            </p>
            <br />
            <p className={about.text}>
              Ouside of school I love all things travel. Some of my favorite
              trips have been exploring the rocky landscape around Moab Utah and
              backpacking through the cities of Europe.
            </p>
            <br />
            <p className={about.text}>
              I&apos;m also a huge fan of photography. I love to capture the
              beauty of the world around me express it through my lens. You can
              check out some of them on the photography page.
            </p>
            <br />
            <p className={about.text}>
              Please check out the rest of the site to see some of my projects
              or get in touch with me though the form!
            </p>
          </div>
        </div>
      </div>
      <div className={about.replay}>
        {replay ? (
          <Image
            priority
            src={repeat as string}
            height={50}
            width={50}
            alt="replay"
            onAnimationEnd={() => setReplay(false)}
            className={about.replaySvgActive}
          />
        ) : (
          <Image
            priority
            src={repeat as string}
            height={50}
            width={50}
            alt="replay"
            onClick={reset}
            className={about.replaySvg}
          />
        )}
      </div>
    </div>
  );
}
