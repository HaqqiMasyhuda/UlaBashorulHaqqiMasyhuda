// --- Typing Effect on Hero Section ---
const typingText = document.getElementById("typing-text");
const textContent = "Welcome to StuntCheck!";
let index = 0;

function typeText() {
  if (index < textContent.length) {
    typingText.textContent += textContent.charAt(index);
    index++;
    setTimeout(typeText, 100); // Typing speed
  }
}
typeText();

// --- Scroll Progress Bar ---
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = `${scrollPercentage}%`;
});

// --- Floating Particles ---
function createParticles() {
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.width = `${Math.random() * 10 + 5}px`;
    particle.style.height = `${Math.random() * 10 + 5}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particle.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
    document.body.appendChild(particle);
  }
}
createParticles();

// --- Dark/Light Mode Switch ---
const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeSwitch.classList.toggle("active");
});

// --- Custom Cursor ---
const cursor = document.createElement("div");
cursor.id = "custom-cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

document.addEventListener("mousedown", () => {
  cursor.classList.add("click");
});
document.addEventListener("mouseup", () => {
  cursor.classList.remove("click");
});
