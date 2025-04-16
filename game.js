import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "login.html";  // 🔄 Redirect to login if not authenticated
    } else {
        document.getElementById("user-info").textContent = `Logged in as: ${user.displayName}`;
        loadGame();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // ✅ Menu Toggle Logic
    const menuToggle = document.getElementById("hamburger-menu");
    const menu = document.getElementById("menu-content");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("open");
        });
    } else {
        console.error("❌ Menu toggle or menu element not found.");
    }

    // ✅ Load Game
    loadGame();
});

// ✅ Load Random Game
function loadGame() {
    const games = [
        "games/tic-tac-toe.html",
        "games/memory-game.html",
        "games/rock-paper-scissors.html",
        "games/dino.html"
    ];

    const gameContainer = document.getElementById("game-container");
    
    if (!gameContainer) {
        console.error("❌ Game container not found!");
        return;
    }

    const randomGame = games[Math.floor(Math.random() * games.length)];
    gameContainer.innerHTML = `<iframe src="${randomGame}" width="100%" height="100%"></iframe>`;
}


