// each frame, canva can be replaced and redrawn where we can add things to make simulation

//declaration
let particleCount = 0;
let particles = [];
let canvas = document.querySelector("#canva");
const gravityPerFrame = 9.8 / 60;
const bounceLossFactor = 0.85; // assuming the ball is rubber
const airResistance = 0.999;
const SurfaceFriction = 0.7; //assuming the surface is concrete
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "white";

function recurr() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //call the method of the classed object gravity per frame
  particles.forEach((particle) => {
    particle.drawParticle();
    particle.acceleration();
    particle.collision();
  });
  for (let i = 0; i < particleCount; i++) {
    for (let j = i + 1; j < particleCount; j++) {
      if (
        particles[i].radius + particles[j].radius >
          Math.abs(particles[i].x - particles[j].x) &&
        particles[i].radius + particles[j].radius >
          Math.abs(particles[i].y - particles[j].y)
      ) {
        //change according to the momentum of the particles, thier radii mass and momentum plays a role here
        // for x-axis
        let viX = particles[i].velocityX;
        let vjX = particles[j].velocityX;
        particles[i].velocityX =
          (viX * (particles[i].mass - particles[j].mass) +
            2 * particles[j].mass * vjX) /
          (particles[i].mass + particles[j].mass);

        particles[j].velocityX =
          (vjX * (particles[j].mass - particles[i].mass) +
            2 * particles[i].mass * viX) /
          (particles[i].mass + particles[j].mass);

        // for y-axis
        let viY = particles[i].velocityY;
        let vjY = particles[j].velocityY;
        particles[i].velocityY =
          (viY * (particles[i].mass - particles[j].mass) +
            2 * particles[j].mass * vjY) /
          (particles[i].mass + particles[j].mass);

        particles[j].velocityY =
          (vjY * (particles[j].mass - particles[i].mass) +
            2 * particles[i].mass * viY) /
          (particles[i].mass + particles[j].mass);
      }
    }
  }
  // loop recursion
  requestAnimationFrame(recurr);
}
requestAnimationFrame(recurr);
console.log(canvas.height);
//particles defining thingy
class genParticles {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.color = `hsl(${Math.floor(Math.random() * 360)}, 60%, 65%)`;
    this.velocityX = -2 + Math.random() * 2;
    this.velocityY = 0;
    this.radius = 12 + Math.floor(Math.random() * 8);
    this.mass = this.radius * this.radius;
  }
  drawParticle() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.closePath();
    this.y = this.y + this.velocityY;
    this.x = this.x + this.velocityX;
    ctx.fillStyle = `${this.color}`;
    ctx.fill();
  }
  acceleration() {
    this.velocityY = this.velocityY + gravityPerFrame;
    this.velocityX = this.velocityX * airResistance;
  }
  collision() {
    if (this.y + this.radius >= canvas.height) {
      this.y = canvas.height - this.radius;
      this.velocityY = -this.velocityY * bounceLossFactor;
      this.bounceCount++;
      this.velocityX = this.velocityX * SurfaceFriction;
    }
    if (this.x + this.radius >= canvas.width) {
      this.x = canvas.width - this.radius;
      this.velocityX = -this.velocityX * bounceLossFactor;
    }
    if (this.x - this.radius <= 0) {
      this.x = 0 + this.radius;
      this.velocityX = -this.velocityX * bounceLossFactor;
    }
  }
}
const button = document.querySelector(".gen-particles");
button.addEventListener("click", () => {
  generateParticles();
});
// generation function
function generateParticles() {
  const particle = new genParticles(
    Math.floor(Math.random() * canvas.width),
    Math.floor(Math.random() * canvas.height)
  );
  particles.push(particle);
  particleCount++;
}
console.log(particles);
