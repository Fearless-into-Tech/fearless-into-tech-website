/*navBar*/
function myFunction() {
  const x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*TypeJs on home page */
const typed = new Typed('#typed',{
  strings: [
    '^1000',
    '<span>M</span>OTIVATING',
    '<span>E</span>MPORWERING',
  "<span>D</span>RIVING CHANGE"
  ],
  backSpeed: 40,
  typeSpeed: 40,
  smartBackspace: true
});



