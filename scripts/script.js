document.addEventListener("DOMContentLoaded", function () {
    const textArray = ["Front End Developer", "Web Developer", "Full Stack Developer", "UI/UX Designer"];
    let currentIndex = 0;
    const element = document.querySelector(".changing-text");

    function typeText(text, i = 0) {
        if (i === 0) element.textContent = ""; // Properly clear the text before typing starts

        if (i < text.length) {
            element.textContent += text.charAt(i);
            setTimeout(() => typeText(text, i + 1), 100);
        } else {
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % textArray.length;
                typeText(textArray[currentIndex]);
            }, 2000); // Pause after full typing before switching
        }
    }

    typeText(textArray[currentIndex]); // Start the animation

    // Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
