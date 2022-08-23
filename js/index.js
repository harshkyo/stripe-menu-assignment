const triggers = document.querySelectorAll(".main-navigation-list-item");
const arrow = document.querySelector(".arrow");
const container = document.querySelector(".dropdown-box-container");
const menu = document.querySelector(".dropdown-box-menu");
var previousCenter = 0;
var respectiveSection = null;
var section = "";

var sectionList = ["section1", "section2", "section3", "section4"];

function handleSections() {
  const sectionVal = respectiveSection.getAttribute("data-section");

  var flag = false;
  // console.log(sectionVal);

  for (let index = 0; index < sectionList.length; index++) {
    const value = sectionList[index];
    var tempSection = document.getElementsByClassName(value)[0];
    if(!flag && value != sectionVal) {
      tempSection.classList.add("section-body-left");
      tempSection.classList.remove("active-section-body");
      tempSection.classList.remove("section-body-right");
    }
    else if(flag && value != sectionVal) {
      tempSection.classList.remove("section-body-left");
      tempSection.classList.remove("active-section-body");
      tempSection.classList.add("section-body-right");
    }
    else {
      flag = true;
      // tempSection.style.setProperty("opacity", `1`);
      tempSection.classList.remove("section-body-left");
      tempSection.classList.add("active-section-body");
      tempSection.classList.remove("section-body-right");
    }

    
  }
}

function handleEnter() {
  const dropdownCoords = this.getBoundingClientRect();
  section = this.getAttribute("data-section");
  respectiveSection = document.getElementsByClassName(section)[0];
  const sectionDimensions = respectiveSection.getBoundingClientRect();

  const coords = {
    left: dropdownCoords.left,
    right: dropdownCoords.right,
    width: dropdownCoords.width,
  };

  const dimensions = {
    width: sectionDimensions.width,
    height: sectionDimensions.height,
  };

  const body = document.querySelector(".dropdown-box-body");

  const currentCenter = coords.right - coords.width / 2;
  body.style.setProperty("width", `${dimensions.width}px`);
  body.style.setProperty("height", `${dimensions.height}px`);

  container.style.setProperty("opacity", `1`);

  arrow.style.setProperty("left", `${currentCenter}px`);
  arrow.style.setProperty("opacity",`1`);
  if (previousCenter === 0) {
    previousCenter = currentCenter;
  } else if (previousCenter < currentCenter) {
    arrow.style.setProperty("left", `${currentCenter}px`);
    previousCenter = currentCenter;
  } else {
    arrow.style.setProperty("left", `${currentCenter}px`);
    previousCenter = currentCenter;
  }

  handleSections();

}

function handleDropdownEnter() {
    handleSections();
}

function handleDropdownLeave() {
  container.style.setProperty("opacity", `0`);
}

function handleLeave() {
  menu.addEventListener("mouseenter", handleDropdownEnter);
  menu.addEventListener("mouseleave", handleDropdownLeave);
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
