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
  calculateButton = document.querySelector("#calculate-button"),
  calculateMessage = document.querySelector("#calculate-message");

// Funtion deleteMessage
const deleteMessage = (button, message, seconds) => {
  button.disabled = true;
  button.style.opacity = 0.5;
  button.style.cursor = "auto";
  setTimeout(() => {
    message.textContent = "";
    button.disabled = false;
    button.style.opacity = 1;
    button.style.cursor = "pointer";
  }, seconds);
};

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
    deleteMessage(calculateButton, calculateMessage, 3000);
  } else {
    // add color and display message
    calculateMessage.classList.remove("color-red");
    calculateMessage.classList.add("color-green");

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
      calculateMessage.textContent = `Your BMI is ${bmi} and your are skinny`;
    } else if (bmi < 25) {
      calculateMessage.textContent = `Your BMI is ${bmi} and your are healthy`;
    } else if (bmi < 30) {
      calculateMessage.textContent = `Your BMI is ${bmi} and your are pre-obese(risk)`;
    } else if (bmi < 35) {
      calculateMessage.textContent = `Your BMI is ${bmi} and your are obese type I (moderate risk)`;
    } else if (bmi < 40) {
      calculateMessage.textContent = `Your BMI is ${bmi} and your are obese type II obese type II (severe risk)`;
    } else if (bmiPrecise > 40 && bmiPrecise < 185.6) {
      calculateMessage.textContent = `Your BMI is ${bmiPrecise.toFixed(
        1
      )} and your are obese type III (very severe risk)`;
    } else {
      calculateMessage.innerHTML = `You have broken the Guinness World Record for the heaviest person on record with a bmi of ${bmiPrecise.toFixed(
        1
      )} <a href="https://en.wikipedia.org/wiki/List_of_heaviest_people" target="_blank" class="calculate__message__link">see here</a>`;
    }

    if (bmiPrecise > 185.6) {
      //delete the message after five seconds
      deleteMessage(calculateButton, calculateMessage, 6000);
    } else {
      //delete the message after four seconds
      deleteMessage(calculateButton, calculateMessage, 4000);
    }
  }
};

calculateForm.addEventListener("submit", calculateBmi);

// =============== EMAIL JS ===============

const contactForm = document.querySelector("#contact-form"),
  contactMessage = document.querySelector("#contact-message"),
  contactUser = document.querySelector("#contact-user"),
  contactButton = document.querySelector("#contact-form button");

const sendEmail = (event) => {
  event.preventDefault();

  // check if the field has a value
  if (contactUser.value === "") {
    //add and remove color
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");

    // show message
    contactMessage.textContent = "You must enter your email";

    // remove message three seconds
    deleteMessage(contactButton, contactMessage, 3000);
  } else {
    //serviceID - templateID - #form - publicKey
    emailjs
      .sendForm("serviceID", "templaID", "#contact-form", "publicKey")
      .then((result) => {
        // show message and add color
        contactMessage.classList.remove("color-red");
        contactMessage.classList.add("color-green");

        // show message
        contactMessage.textContent = "You registered successfully";

        // remove message three seconds
        deleteMessage(contactButton, contactMessage, 3000);
      })
      .catch((err) => {
        // mail sending error
        alert(
          "OOPS! An error has occurred while subscribing, check your internet connection or contact us through our social networks and report this error.",
          err
        );
      });
  }
};

contactForm.addEventListener("submit", sendEmail);

// =============== SCROLL SECTION ACTIVE LINK ===============

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        `.nav__menu a[href*= ${sectionId}]`
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

// =============== SCROLL UP ===============

const scrollUp = () => {
  const scrollUp = document.querySelector("#scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);
