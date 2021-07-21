var coll = document.getElementsByClassName("collapse")

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active")
    var content = this.nextElementSibling || this.previousElementSibling
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + "px"
    }
  })
}

var chkbx = document.getElementById("checkbox")

chkbx.addEventListener("click", function () {
  if (chkbx.checked) {
    var css = document.getElementById("css-change")
    css.href = "dark-mode.css"
    var sun = document.getElementById("swap-sun")
    sun.style.display = "none"
    var moon = document.getElementById("swap-moon")
    moon.style.display = "block"
  } else {
    var css = document.getElementById("css-change")
    css.href = ""
    var sun = document.getElementById("swap-sun")
    sun.style.display = "block"
    var moon = document.getElementById("swap-moon")
    moon.style.display = "none"
  }
})