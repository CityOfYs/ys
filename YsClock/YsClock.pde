/**
 * Clock. 
 * 
 * The current time can be read with the second(), minute(), 
 * and hour() functions. In this example, sin() and cos() values
 * are used to set the position of the hands.
 */
int cx, cy;
float secondsRadius;
float minutesRadius;
float hoursRadius;
float clockDiameter;
PImage logo;

/**
Wave 1.
*/
int xspacing = 8;   // How far apart should each horizontal location be spaced
int w;              // Width of entire wave

float theta = 0.0;  // Start angle at 0
float amplitude = 75.0;  // Height of wave
float period = 500.0;  // How many pixels before the wave repeats
float dx;  // Value for incrementing X, a function of period and xspacing
float[] yvalues;  // Using an array to store height values for the wave

/**
Wave 2
*/

int w2;              // Width of entire wave
int maxwaves = 4;   // total # of waves to add together

float theta2 = 0.0;
float[] amplitude2 = new float[maxwaves];   // Height of wave
float[] dx2 = new float[maxwaves];          // Value for incrementing X, to be calculated as a function of period and xspacing
float[] yvalues2;                           // Using an array to store height values for the wave (not entirely necessary)

void setup() {
  size(640, 360);
  
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new float[w/xspacing];
  
  w2 = width + 16;

  for (int i = 0; i < maxwaves; i++) {
    amplitude2[i] = random(10,30);
    float period = random(100,300); // How many pixels before the wave repeats
    dx2[i] = (TWO_PI / period) * xspacing;
  }

  yvalues2 = new float[w];
  
  int radius = min(width, height) / 2;
  secondsRadius = radius * 0.77;
  minutesRadius = radius * 0.68;
  hoursRadius = radius * 0.45;
  clockDiameter = radius * 1.8;
  
  cx = width / 2;
  cy = height / 2;
  
  logo = loadImage("logo-transparent.png");
  logo.resize(200, 200);
}

void draw() {
  background(#0d2280);
  
  calcWave1();
  renderWave1();
  
  calcWave2();
  renderWave2();
  
  renderClock();
}

void renderClock() {
  // Draw the clock background
  fill(#317267);
  noStroke();
  ellipse(cx, cy, clockDiameter, clockDiameter);
  image(logo, cx*.69, cy*.42);
  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  float s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  float m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI; 
  float h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
  
  // Draw the hands of the clock
  stroke(30);
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);
  
  // Draw the minute ticks
  strokeWeight(2);
  beginShape(POINTS);
  for (int a = 0; a < 360; a+=6) {
    float angle = radians(a);
    float x = cx + cos(angle) * secondsRadius;
    float y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  endShape();
}

void calcWave1() {
  // Increment theta (try different values for 'angular velocity' here
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  float x = theta;
  for (int i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

void renderWave1() {
  noStroke();
  fill(11,80,79, 20);
  // A simple way to draw the wave with an ellipse at each location
  for (int x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/2+yvalues[x], 100, 100);
  }
}

void calcWave2() {
  // Increment theta (try different values for 'angular velocity' here
  theta2 += 0.02;

  // Set all height values to zero
  for (int i = 0; i < yvalues2.length; i++) {
    yvalues2[i] = 0;
  }
 
  // Accumulate wave height values
  for (int j = 0; j < maxwaves; j++) {
    float x = theta2;
    for (int i = 0; i < yvalues2.length; i++) {
      // Every other wave is cosine instead of sine
      if (j % 2 == 0)  yvalues2[i] += sin(x)*amplitude2[j];
      else yvalues2[i] += cos(x)*amplitude2[j];
      x+=dx2[j];
    }
  }
}

void renderWave2() {
  // A simple way to draw the wave with an ellipse at each location
  noStroke();
  fill(5,24,84);
  ellipseMode(CENTER);
  for (int x = 0; x < yvalues2.length; x++) {
    //ellipse(x*xspacing,height/2+yvalues2[x],16,16);
    quad(x, height-yvalues2[x]*6,x+xspacing, height-yvalues2[x]*6,x+xspacing, height,x, height);
  }
}
