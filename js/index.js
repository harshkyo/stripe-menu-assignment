const triggers = document.querySelectorAll(".main-navigation-list-item");
const background = document.querySelector(".dropdown-box");
const nav = document.querySelector(".main-navigation-list");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add("trigger-enter-active"), 150);
  background.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  // console.log(dropdown);

  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };
  console.log(coords.width);
  console.log(coords.height);

  const backgroundarrow = document.querySelector(".arrow");

  // backgroundarrow.style.setProperty("top", `${coords.width}px`);
  // backgroundarrow.style.setProperty("left", `${coords.left}`);
  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px,${coords.top}px)`
  );
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);

const menuContainer = document.querySelector('.mobile-menu-container');
function handleMobileMenu() {
  menuContainer.style.setProperty("display", `block`);
}

function handleCloseButton() {
  menuContainer.style.setProperty("display", `none`);
}
