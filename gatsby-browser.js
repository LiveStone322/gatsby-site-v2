import "./src/styles/global.scss"
import "./src/styles/bootstrap/custom-bootstrap.scss"
import Scroll from "react-scroll"

// TODO: поставить listener на ресайз
updateVh();

Scroll?.Events?.scrollEvent.register("begin", function (to, element) {
  console.log("begin", to, element)
})

document.addEventListener("scroll", function (e) {
  console.log(e)
})

function updateVh() {
  document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`)
}