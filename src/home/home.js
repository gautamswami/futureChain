import { GUI } from "https://cdn.skypack.dev/dat.gui";
import gsap from "https://cdn.skypack.dev/gsap@3.12.2";
import "./home.css";
import { useEffect, useState } from "react";
import FontAnimation from "./fontAnimation";
import Canvas from "../canvas";
export default function Home(props) {
  const SIDES = ["top", "right", "bottom", "left"];
  
  const { showVideo, setShowVideo } = props;
  const CONFIG = {
    perspective: false,
    reduced: 1,
    rx: -24,
    ry: -24,
    bn: 5,
    hl: 1,
    hu: 359,
    sl: 1,
    su:4,
    dl: 0,
    du: 5,
    cell: 5,
    depth: 120,
  };

  const GENERATE_BEAMS = () => {
    for (const SIDE of SIDES) {
      const CONTAINER = document.querySelector(`.warp__side--${SIDE}`);
      CONTAINER.innerHTML = "";
      const NUMBER = gsap.utils.random(1, CONFIG.bn, 1);
      const BEAMS = new Array(NUMBER).fill({}).map((beam) => {
        return {
          hue: gsap.utils.random(CONFIG.hl, CONFIG.hu, 1),
          x: gsap.utils.random(0, 100 / CONFIG.cell - 1, 1),
          speed: gsap.utils.random(CONFIG.sl, CONFIG.su),
          delay: gsap.utils.random(CONFIG.dl, CONFIG.du),
        };
      });
      for (const BEAM of BEAMS) {
        CONTAINER.appendChild(
          Object.assign(document.createElement("div"), {
            className: "beam",
            style: `
          --hue: ${BEAM.hue};
          --ar: ${gsap.utils.random(1, 10, 1)};
          --x: ${BEAM.x};
          --speed: ${BEAM.speed};
          --delay: ${BEAM.delay};
        `,
          })
        );
      }
    }
  };

  const TOGGLE = () => {
    const showingPerspective = CONFIG.exploded;
    if (!document.startViewTransition)
      return document.body.toggleAttribute("data-perspective");
    document.startViewTransition(() => {
      document.body.toggleAttribute("data-perspective");
    });
  };

  const UPDATE_CAMERA = () => {
    document.documentElement.style.setProperty("--rx", CONFIG.rx);
    document.documentElement.style.setProperty("--ry", CONFIG.ry);
  };
  const UPDATE_GRID = () => {
    document.documentElement.style.setProperty(
      "--grid-size",
      `${CONFIG.cell}%`
    );
    GENERATE_BEAMS();
  };

  const UPDATE_PERSPECTIVE = () => {
    document.documentElement.style.setProperty("--perspective", CONFIG.depth);
  };

  const UPDATE_MOTION_PREF = () => {
    document.documentElement.style.setProperty("--reduced", CONFIG.reduced);
  };

  useEffect(() => {
    GENERATE_BEAMS();
    UPDATE_CAMERA();
    UPDATE_PERSPECTIVE();
    UPDATE_MOTION_PREF();
  }, []);

  return (
    <>
          <Canvas />
      <div className="scene">

        <div className="wrapper">
          {!showVideo && (
            <article>
              <FontAnimation />
              <p>
                Shaping the Future of <strong>Blockchain</strong> Innovation!
              </p>
              <a
                onClick={() => {
                  setShowVideo(true);
                }}
              >
                Step into Future Chain
              </a>
            </article>
          )}
          <div className="warp">
            <div className="warp__side warp__side--top"></div>
            <div className="warp__side warp__side--right"></div>
            <div className="warp__side warp__side--bottom"></div>
            <div className="warp__side warp__side--left"></div>
          </div>
        </div>
      </div>
    </>
  );
}
