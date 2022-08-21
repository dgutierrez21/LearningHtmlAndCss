// =============== SHOW MENU ===============

const navToggle = document.querySelector("#nav-toggle"),
  navMenu = document.querySelector("#nav-menu"),
  navClose = document.querySelector("#nav-close");

//   MENU SHOW
// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("nav-menu-active");
  });
}

//   MENU HIDDEN
// Validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu-active");
  });
}

// =============== REMOVE MENU MOBILE ===============

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("nav-menu-active");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

// =============== CHANGE BACKGROUND HEADER ===============

const scrollHeader = () => {
  const header = document.querySelector("#header");
  this.scrollY >= 50
    ? header.classList.add("change-bg-header")
    : header.classList.remove("change-bg-header");
};

window.addEventListener("scroll", scrollHeader);

// =============== CALCULATE JS ===============

const calculateForm = document.querySelector("#calculate-form"),
  calculateCm = document.querySelector("#calculate-cm"),
  calculateKg = document.querySelector("#calculate-kg"),
  calculateMessage = document.querySelector("#calculate-message");

const calculateBmi = (event) => {
  event.preventDefault();

  // Check if the fields have a value
  if (calculateCm.value === "" || calculateKg.value === "") {
    // add and remove color
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    // show message
    calculateMessage.textContent = "Fill in the Height and Weight";

    //delete the message after three seconds
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    // BMI Formula
    // How is BMI calculated? With the metric system, the formula for BMI is weight in kilograms divided by height in meters squared.
    const cm = calculateCm.value / 100,
      kg = calculateKg.value,
      bmi = Math.round(kg / (cm * cm)),
      bmiPrecise = kg / (cm * cm);

    // show your health status
    if (bmi <= 0) {
      // add color and display message
      calculateMessage.classList.remove("color-green");
      calculateMessage.classList.add("color-red");
      calculateMessage.textContent = `Enter a valid value`;
    } else if (bmi < 18.5) {
      // add color and display message
      calculateMessage.classList.remove("color-red");
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and your are skinny`;
    } else if (bmi < 25) {
      // add color and display message
      calculateMessage.classList.remove("color-red");
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and your are healthy`;
    } else if (bmi < 30) {
      // add color and display message
      calculateMessage.classList.remove("color-red");
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and your are pre-obese(risk)`;
    } else if (bmi < 35) {
      // add color and display message
      calculateMessage.classList.remove("color-red");
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and your are obese type I (moderate risk)`;
    } else if (bmi < 40) {
      // add color and display message
      calculateMessage.classList.remove("color-red");
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and your are obese type II obese type II (severe risk)`;
    } else if (bmi > 40 && bmi <= 185.5) {
      // add color and display message
      calculateMessage.classList.remove("color-red");
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = `Your BMI is ${bmi} and your are obese type III (very severe risk)`;
    } else {
      // add color and display message
      calculateMessage.classList.remove("color-red");
      calculateMessage.classList.add("color-green");
      calculateMessage.innerHTML = `You have broken the Guinness World Record for the heaviest person on record with a bmi of ${bmiPrecise.toFixed(
        1
      )} <a href="https://en.wikipedia.org/wiki/List_of_heaviest_people" target="_blank" class="calculate__message__link">see here</a>`;
    }

    //remove message
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 4000);
  }
};

calculateForm.addEventListener("submit", calculateBmi);
