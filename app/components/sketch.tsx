import React from "react";
import { type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

const sketch: Sketch = (p5) => {
  let egg;
  p5.setup = () => {
    p5.createCanvas("700", "700");
    egg = new Ingredient(90, 65);
  }

  p5.draw = () => {
    p5.background("#e2231b");
    egg.update()

  };

  p5.class = Ingredient(x, y) => {
  // @ts-ignore
  p5.constructor(x, y) {
    this.yOffset = 0;
    this.amplitude = 0.15;
    this.frequency = 0.04;
    this.x = x;
    this.y = y;
    this.radius = 30;
    this.img = p5.loadImage('./ramenegg.png'); // Load the image
  }

  p5.update() {
    this.y = this.y + p5.sin(this.yOffset) * this.amplitude;
    this.yOffset += this.frequency;

    // ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    p5.image(this.img, this.x, this.y, this.radius * 5, this.radius * 5)
  }
}

};

export default function Page() {
  return <NextReactP5Wrapper sketch={sketch} />;
}

