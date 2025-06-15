document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your complaint has been submitted.");
  this.reset();
});
