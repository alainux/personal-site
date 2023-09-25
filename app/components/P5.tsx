"use client";

// @ts-ignore
import { P5CanvasInstance, ReactP5Wrapper, SketchProps, } from "@p5-wrapper/react";
import React from "react";

type MySketchProps = SketchProps & {
  rotation: number;
};

function sketch(p5: P5CanvasInstance<MySketchProps>) {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
  };

  p5.draw = () => {
    p5.fill(255);
    p5.stroke(200);
    const x = p5.mouseX - p5.width / 2;
    const y = p5.mouseY - p5.height / 2;
    const r = Math.sqrt(x * x + y * y);

    if (x && y) {
      p5.ellipse(x, y, r, r);
    }
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
}

const P5: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-fullopacity-25 -z-10">
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};

export default P5;