// 1. Mouse Parallax Effect (Card ikutin arah mouse)
document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25;
    document.querySelector(".container").style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// 2. Click Audio & Smooth Interaction
document.body.addEventListener('click', function() {
    const audio = document.getElementById('bgMusic');
    if (audio.paused) {
        audio.volume = 0.5;
        audio.play();
    }
    
    // Efek Ripple sederhana pas klik
    let ripple = document.createElement("div");
    ripple.style.position = "fixed";
    ripple.style.width = "10px";
    ripple.style.height = "10px";
    ripple.style.background = "var(--primary)";
    ripple.style.borderRadius = "50%";
    ripple.style.left = event.clientX + "px";
    ripple.style.top = event.clientY + "px";
    ripple.style.boxShadow = "0 0 20px var(--primary)";
    ripple.style.transition = "all 0.6s ease-out";
    ripple.style.pointerEvents = "none";
    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.style.transform = "scale(10)";
        ripple.style.opacity = "0";
    }, 10);
    
    setTimeout(() => { ripple.remove(); }, 600);
});

// 3. Auto-typing effect buat Header (Opsional tapi keren)
const title = document.querySelector('h1');
const text = title.innerText;
title.innerText = '';
let i = 0;
function typeWriter() {
    if (i < text.length) {
        title.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;
