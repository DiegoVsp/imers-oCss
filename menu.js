let show = true;
const hamburguer = document.querySelector(".hamburguer");
const linksmenu = document.querySelector(".links-menu");
const links = document.querySelectorAll(".links-menu li");

hamburguer.addEventListener("click", () => {
  document.body.style.overflow = show? "hidden":"initial"
 
  linksmenu.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  })
  show = !show;
})