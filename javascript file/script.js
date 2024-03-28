//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwXLNXS6Jkmdjb8miPcvDa0XdoFmL4YVfTcF2bFmZ91BU8xVCykALxiitdywp056vZN/exec";
const from = document.forms["google-sheet"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .catch((error) => console.error("Error!", error.message));
});
