// import "public/build/tailwind.css";

function menuToggle() {
  if(document.querySelector("#navBtn:checked") !== null) {
    document.getElementById("navMenu").style.width = "100%";
  } else {
    document.getElementById("navMenu").style.width = "0";
  }
}
