
// ****************************** start toggle theme script ****************************//

// selectors
const bodyEl = document.querySelector('body');
const toggleIcons = document.querySelector('.toggle-icon');
const modeToggler = document.querySelector(".mode-toggler");

//  initial state 
let modeToggled = false;
let isDarkMode = false;
let darkMode = localStorage.getItem('darkMode')? localStorage.getItem('darkMode') : false;

const sunrise = () => {
  toggleIcons.children[0].style.opacity = "1";
  toggleIcons.children[1].style.opacity = "0";
  toggleIcons.children[1].style.transform = "translateX(-54px) rotate(-360deg)"
}
const sunset = () => {
  toggleIcons.children[0].style.opacity = "0";
  toggleIcons.children[1].style.opacity = "1";
  toggleIcons.children[1].style.transform = "translateX(54px) rotate(360deg)"
}

const enableDarkMode = async () => {
  bodyEl.classList.remove('light-theme');
  bodyEl.classList.add('dark-theme');
  await localStorage.setItem('darkMode', 'enabled');
  sunset();
}
const disableDarkMode = async () => {
  bodyEl.classList.add('light-theme');
  bodyEl.classList.remove('dark-theme');
  await localStorage.setItem('darkMode', null);
  sunrise();
}

// sellf invoked function to check if user enabled dark-mode before
(async () => {
  if (darkMode === 'enabled') {
    await enableDarkMode();
    isDarkMode = true;
  }
})();

modeToggler.addEventListener('change', async (event) => {
  modeToggled = event.target.checked;
  if (isDarkMode) !modeToggled ? await enableDarkMode() : await disableDarkMode();
  else modeToggled ? await enableDarkMode() : await disableDarkMode();
})

// ****************************** end toggle theme script  ****************************//



// ****************************** start toggle menu script ****************************//

// selectors
const menuToggler = document.querySelector('.menu-toggler');
const menu = document.querySelector('.menu');

// initial state 
let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    menuToggler.classList.add('close');
    menu.classList.add('show');
    showMenu = true;
  }
  else {
    menuToggler.classList.remove('close');
    menu.classList.remove('show');
    showMenu = false;
  }
}

menuToggler.addEventListener('click', toggleMenu);

// ****************************** end toggle menu script ****************************//
