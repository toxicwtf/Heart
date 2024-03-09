const body = document.querySelector("body");
body.addEventListener("mousemove", (e) => {});

window.addEventListener("mousemove", (e) => {
  console.log(e.clientX);
  console.log(e.clientY);
  let randome = Math.floor(Math.random() * 150);
  const img = document.createElement("img");
  img.style.setProperty("--width", randome + "px");
  img.src = "heart.png";
  img.style.left = e.clientX + "px";
  img.style.top = e.clientY + "px";
  body.appendChild(img);
  setInterval(() => {
    img.remove();
  }, 1900);
});
