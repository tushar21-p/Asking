const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

// No button behavior remains the same
noButton.addEventListener("mouseover", () => {
  const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth-20);
  const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight-20);
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
});

// Yes button redirects to the new page
yesButton.addEventListener("click", () => {
  window.location.href = "yes_page.html";
});
