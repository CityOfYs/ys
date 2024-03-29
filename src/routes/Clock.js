import Sketch from "react-p5";

export default function Clock() {
    let cx, cy;
    let secondsRadius;
    let minutesRadius;
    let hoursRadius;
    let clockDiameter;
    let WIDTH = 200;
    let HEIGHT = 200;

    const setup = (p5, canvasParentRef) => {
  		// use parent to render the canvas in this ref
  		// (without that p5 will render the canvas outside of your component)
  		p5.createCanvas(WIDTH, HEIGHT).parent(canvasParentRef);
  	};

    const draw = (p5) => {
        let radius = p5.min(WIDTH, HEIGHT) / 2;
        secondsRadius = radius * 0.71;
        minutesRadius = radius * 0.6;
        hoursRadius = radius * 0.5;
        clockDiameter = radius * 1.7;

        cx = WIDTH / 2;
        cy = HEIGHT / 2;
        p5.background(0);
        p5.noStroke();
        p5.fill(244, 122, 158);

          // Draw the clock background
          p5.noStroke();
          p5.fill(13, 34, 128);
          p5.ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
          p5.fill(4, 7, 32);
          p5.ellipse(cx, cy, clockDiameter, clockDiameter);

          // Angles for sin() and cos() start at 3 o'clock;
          // subtract HALF_PI to make them start at the top
          let s = p5.map(p5.second(), 0, 60, 0, p5.TWO_PI) - p5.HALF_PI;
          let m = p5.map(p5.minute() + p5.norm(p5.second(), 0, 60), 0, 60, 0, p5.TWO_PI) - p5.HALF_PI;
          let h = p5.map(p5.hour() + p5.norm(p5.minute(), 0, 60), 0, 24, 0, p5.TWO_PI * 2) - p5.HALF_PI;

          // Draw the hands of the clock
          p5.stroke(255);
          p5.strokeWeight(1);
          p5.line(cx, cy, cx + p5.cos(s) * secondsRadius, cy + p5.sin(s) * secondsRadius);
          p5.strokeWeight(2);
          p5.line(cx, cy, cx + p5.cos(m) * minutesRadius, cy + p5.sin(m) * minutesRadius);
          p5.strokeWeight(4);
          p5.line(cx, cy, cx + p5.cos(h) * hoursRadius, cy + p5.sin(h) * hoursRadius);

          // Draw the minute ticks
          p5.strokeWeight(2);
          p5.beginShape(p5.POINTS);
          for (let a = 0; a < 360; a += 6) {
            let angle = p5.radians(a);
            let x = cx + p5.cos(angle) * secondsRadius;
            let y = cy + p5.sin(angle) * secondsRadius;
            p5.vertex(x, y);
          }
          p5.endShape();
	};

    return (
        <Sketch setup={setup} draw={draw} />
    )
}
