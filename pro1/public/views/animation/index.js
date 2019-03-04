function startAnimation() {
    const dom = document.getElementById("normalTransitionDiv");
    dom.classList.add("finally");
    const dom2 = document.getElementById("normalAnimationDiv");
    dom2.classList.add("patrol");
}

function stopAnimation() {
    const dom = document.getElementById("normalTransitionDiv");
    dom.classList.remove("finally");
    const dom2 = document.getElementById("normalAnimationDiv");
    dom2.classList.remove("patrol");
}