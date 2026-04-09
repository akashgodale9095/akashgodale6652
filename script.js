// Typing Animation
const text = ["Mukund","BCA", "Full Stack Developer", "Tech Enthusiast"];
let i = 0, j = 0, del = false;

function type() {
  let current = text[i];
  document.querySelector(".typing").textContent = current.substring(0, j);

  if (!del) {
    j++;
    if (j > current.length) {
      del = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    j--;
    if (j == 0) {
      del = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, del ? 50 : 100);
}

type();
// education graph animation
window.addEventListener("load", () => {

  document.querySelectorAll(".edu-fill").forEach(bar => {

    let width = bar.textContent;

    setTimeout(() => {
      bar.style.width = width;
    }, 300);

  });

});

// Smooth Scroll Function (View Work button)
function scrollToSection(id) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  } else {
    console.log("Section not found:", id);
  }
}


// Certificate image click open full size
document.querySelectorAll(".cert-card img").forEach(img => {
  img.addEventListener("click", () => {
    window.open(img.src, "_blank");
  });
});