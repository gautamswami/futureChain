import React, { useState, useEffect } from 'react';
import p5 from 'p5';

let stars;
let playBool = true;

const WobblyFunction = () => {
  useEffect(() => {
    const sketch = (p) => {
      let cnv;
      let c;
      let nRot;
      let t;

      p.setup = () => {
        cnv = p.createCanvas(p.windowWidth * 0.95, p.windowHeight * 0.95);
        p.rectMode(p.CENTER);
        p.angleMode(p.DEGREES);
        c = p.max(p.width, p.height);
        nRot = p.int(p.random(2, 15));
        stars = [];
        const nStars = p.int(p.random(c / 5, c * 1.5));
        for (let i = 0; i < nStars; i++) {
          stars[i] = {
            x: p.randomGaussian(0, c / 4),
            y: p.randomGaussian(0, c / 4),
            s: p.randomGaussian(0.2, 1),
            color: p.color(p.random(200, 255), p.random(200, 255), p.random(200, 255)),
            a: p.random(-c / 5, c / 5),
            b: p.random(-c / 5, c / 5),
            c: p.random(-2, 2),
            d: p.random(-5, 5)
          };
        }
      };

      p.draw = () => {
        p.background(5, 15, 20);
        p.translate(p.width / 2, p.height / 2);
        t = p.frameCount / 10;
        p.noStroke();
        for (let i = 0; i < stars.length; i++) {
          for (let j = 0; j < nRot; j++) {
            p.push();
            p.rotate((360 / nRot) * j);
            p.fill(stars[i].color);
            let x =
              stars[i].x +
              stars[i].a * p.sin(stars[i].b * p.sin(t)) +
              stars[i].b * p.cos(stars[i].c - (t / 4) * p.sin((stars[i].c * t) / 10));
            let y =
              stars[i].y +
              stars[i].b * p.cos(stars[i].b * p.sin(t)) +
              stars[i].a * p.sin(stars[i].d - (t / 4) * p.cos((stars[i].d * t) / 10));
            p.circle(x, y, stars[i].s);
            p.pop();
          }
        }
        border();
      };

      const border = () => {
        p.noFill();
        p.stroke(10, 20, 30);
        p.strokeWeight(4);
        p.rect(0, 0, p.width - 20, p.height - 20);
      };

      // p.mousePressed = () => {
      //   p.frameCount = 0;
      //   p.setup();
      //   p.draw();
      // };

      // p.keyPressed = () => {
      //   if (p.keyCode === 32 && playBool) {
      //     playBool = false;
      //     p.noLoop();
      //   } else {
      //     playBool = true;
      //     p.loop();
      //   }
      // };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth * 0.9, p.windowHeight * 0.9);
      };
    };

    new p5(sketch);
  }, []);

  return <div id="sketch-container"></div>;
};

export default WobblyFunction;
