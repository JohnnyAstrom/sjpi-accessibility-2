window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

for (let i = 0; i < 100000; i++) {
  if (i % 1000 === 0) console.log(i);
}