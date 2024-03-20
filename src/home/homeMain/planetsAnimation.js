import { useState } from "react";
import "./planet.css";
export default function PlanetAnimation() {
  const [planetPos, setPlanetPos] = useState([
    {
      position: 10,
      scale: 1.2,
    },
    {
      position: -12,
      scale: 0.9,
    },
    {
      position: -34,
      scale: 0,
    },
  ]);
  const handleNextPlanet = (id) => {
    if(id===1){
    setPlanetPos([
      {
        position: 32,
        scale: 0.3,
      },
      {
        position: 10,
        scale: 1.2,
      },
      {
        position: -12,
        scale: 0.9,
      },
    ]);
  }
  else if(id===2){
    setPlanetPos([
      {
        position: 32,
        scale: 0.3,
      },
      {
        position: 32,
        scale: 0.3,
      },
      {
        position: 10,
        scale: 1.2,
      },
  ])}
  };
  const handlePrevPlanet = () => {
    setPlanetPos([
      {
        position: 10,
        scale: 1.2,
      },
      {
        position: -12,
        scale: 0.9,
      },
      {
        position: -34,
        scale: 0,
      },
    ]);
  };
  return (
    <>
      <div className="planetMain">
        <div className="planetMenu">
        <button
            className="planetButton"
            onClick={() => {
              handleNextPlanet(2);
            }}
          >
            Feature 3
          </button>
          <button
            className="planetButton"
            onClick={() => {
              handleNextPlanet(1);
            }}
          >
            Feature 2
          </button>
          <button
            className="planetButton"
            onClick={() => {
              handlePrevPlanet();
            }}
          >
            Feature 1
          </button>
        </div>

        <div className="planetContainer ">
          <div
            className="planet1 commonPlanet"
            style={{
              transform: `translateZ(${planetPos[0].position}rem) scale(${planetPos[0].scale})`,
            }}
          >
            <p>Feature 1</p>
            <img src="/assets/images/6227191.jpg" />
          </div>
          <div
            className="planet2 commonPlanet"
            style={{
              transform: `translateZ(${planetPos[1].position}rem) scale(${planetPos[1].scale})`,
            }}
          >
            <p>Feature 2</p>
            <img src="/assets/images/6227191.jpg" />
          </div>
          <div
            className="planet3 commonPlanet"
            style={{
              transform: `translateZ(${planetPos[2].position}rem) scale(${planetPos[2].scale})`,
            }}
          >
            <p>Feature 3</p>
            <img src="/assets/images/6227191.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}
