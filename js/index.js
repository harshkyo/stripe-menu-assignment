const triggers = document.querySelectorAll(".main-navigation-list-item");
const arrow = document.querySelector(".arrow");
const container = document.querySelector(".dropdown-box-container");
var previousCenter = 0;
var respectiveSection = null;
var section = "";

function handleEnter() {
  const dropdownCoords = this.getBoundingClientRect();
  section = this.getAttribute("data-section");
  respectiveSection = document.getElementsByClassName(section)[0];

  // if(section === "section4") {
  //   respectiveSection.style.setProperty("width", `540px`);
  // }

  const coords = {
    left: dropdownCoords.left,
    right: dropdownCoords.right,
    width: dropdownCoords.width,
  };
  const currentCenter = coords.right - coords.width / 2 - 10;
  container.style.setProperty("display", `flex`);
  respectiveSection.style.setProperty("display", `block`);
  arrow.style.setProperty("left", `${currentCenter}px`);
  if (previousCenter === 0) {
    previousCenter = currentCenter;
  } else if (previousCenter < currentCenter) {
    arrow.style.setProperty("left", `${currentCenter}px`);
    // arrow.style.setProperty("transform", `translate(${currentCenter}px)`);
    previousCenter = currentCenter;
  } else {
    arrow.style.setProperty("left", `${currentCenter}px`);
    // arrow.style.setProperty("transform", `translate(${currentCenter}px)`);
    previousCenter = currentCenter;
  }
}

function handleDropdownLeave() {
  const sectionVal = this.getAttribute("data-section");
  if (section !== sectionVal) {
    container.style.setProperty("display", `none`);
    respectiveSection.style.setProperty("display", `none`);
  }
}

function handleLeave() {
  respectiveSection.addEventListener("mouseleave", handleDropdownLeave);
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);

const menuContainer = document.querySelector(".mobile-menu-container");
function handleMobileMenu() {
  menuContainer.style.setProperty("display", `block`);
}

function handleCloseButton() {
  menuContainer.style.setProperty("display", `none`);
}
