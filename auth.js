import { auth, provider, signInWithPopup, signInWithEmailAndPassword, signInAnonymously, signOut, onAuthStateChanged } from "./firebase.js";

// ✅ Google Login
export async function googleLogin() {
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("✅ User signed in:", result.user);
        window.location.href = "game.html"; // Redirect after login
    } catch (error) {
        console.error("❌ Login Failed:", error.message);
        alert(error.message); // Show error message
    }
}

// ✅ Email & Password Login
export async function emailLogin(event) {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("✅ Email login successful");
        window.location.href = "game.html"; // Redirect
    } catch (error) {
        console.error("❌ Email login failed:", error.message);
        let errorMessage = "Login failed. Please check your email and password.";
        if (error.code === 'auth/user-not-found') {
            errorMessage = "No account found with this email.";
        } else if (error.code === 'auth/wrong-password') {
            errorMessage = "Incorrect password. Please try again.";
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = "Invalid email format.";
        }
        alert(errorMessage);
    }
}

// ✅ Guest (Anonymous) Login
export async function guestLogin() {
    try {
        await signInAnonymously(auth);
        console.log("✅ Guest logged in");
        window.location.href = "game.html"; // Redirect
    } catch (error) {
        console.error("❌ Guest login failed:", error.message);
        alert(error.message);
    }
}

// ✅ Logout
export async function logout() {
    try {
        await signOut(auth);
        console.log("✅ User logged out");
        window.location.href = "login.html"; // Redirect to login
    } catch (error) {
        console.error("❌ Logout Failed:", error.message);
    }
}

// ✅ Track User Authentication State
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("✅ User is authenticated:", user);
    } else {
        console.log("❌ No user signed in");
    }
});
