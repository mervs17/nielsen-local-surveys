import "../main.scss";
import "flowbite";

async function getComponent() {
  const element = "Load Lodash!!";
  const {
    default: _
  } = await import("lodash");
  return element;
}
getComponent().then((component) => {
  console.log(component);
});

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

// set the target element that will be collapsed or expanded (eg. navbar menu)
const targetEl = document.getElementById("menuMobile");

// optionally set a trigger element (eg. a button, hamburger icon)
const triggerEl = document.getElementById("triggerMenu");

// optional options with default values and callback functions
const options = {
  triggerEl: triggerEl,
  onCollapse: () => {
    console.log("element has been collapsed");
  },
  onExpand: () => {
    console.log("element has been expanded");
  },
  onToggle: () => {
    console.log("element has been toggled");
  },
};

/*
 * targetEl: required
 * options: optional
 */
const collapse = new Collapse(targetEl, options);

// show the target element
//collapse.expand();

// hide the target element
//collapse.collapse();

// toggle the visibility of the target element
//collapse.toggle();


const translateClicked = document.querySelector("#translate");
const showTranslate = document.querySelector("#show-translate");

translateClicked.addEventListener("click", () => {
  showTranslate.classList.toggle("show-translate");
  translateClicked.classList.toggle("show-translate");
});


// Header & Scroll Top

var scrollPosition = window.scrollY;
var logoContainer = document.getElementsByTagName('header')[0];

const showOnPx = 200;
const backToTopButton = document.querySelector(".back-to-top")
const scrollContainer = () => {
  return document.documentElement || document.body;
};


window.addEventListener('scroll', function() {
  scrollPosition = window.scrollY;

  if (scrollPosition >= 200) {
    logoContainer.classList.add('shrink');
  } else {
    logoContainer.classList.remove('shrink');
  }

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.add("visible")
  } else {
    backToTopButton.classList.remove("visible")
  }
})

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

backToTopButton.addEventListener("click", goToTop)



