const hamburger = document.querySelector(".header-hamburger")

hamburger.addEventListener("click", () => {
  const body = document.body
  if (body.classList.contains("show-nav")) {
    body.classList.remove("show-nav")
  } else {
    body.classList.add("show-nav")
  }
})