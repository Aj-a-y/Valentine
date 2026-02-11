// JavaScript source code
// 🌸 Start flower animations
window.onload = () => {
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
    }, 800);
};

// 😈 Evil NO button
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 💖 YES button win
document.getElementById("yesBtn").addEventListener("click", () => {
    document.body.innerHTML = `
    <div class="card">
      <h1>YAYYYY 💕🌸</h1>
      <p>You just made me the happiest person alive 😌</p>
    </div>
  `;
});
