const coursesEn = [
  'Hamburger, cream sauce and poiled potates',
  'Goan style fish curry and whole grain rice',
  'Vegan Chili sin carne and whole grain rice',
  'Broccoli puree soup, side salad with two napas',
  'Lunch baguette with BBQ-turkey filling',
  'Cheese / Chicken / Vege / Halloum burger and french fries',
];
const coursesFi = [
  'Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa',
  'Goalaista kalacurrya ja täysjyväriisiä',
  'vegaani Chili sin carne ja täysjyväriisi',
  'Parsakeittoa,lisäkesalaatti kahdella napaksella',
  'Lunch baguette with BBQ-turkey filling',
  'Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset',
];

let lang = 'fi';
let activeMenu = coursesFi;

/**
 * Renders menu content to html page
 * @param {Array} menu - array of dishes
 */
const renderMenu = (menu) => {
  const menuBox = document.querySelector('.menu-box');
  menuBox.innerHTML = '';
  const list = document.createElement('ul');
  for (const dish of menu) {
    const li = document.createElement('li');
    li.textContent = dish;
    list.append(li);
  }
  menuBox.append(list);
};

renderMenu(activeMenu);

/**
 * Sorts menu alphapetically
 * @param {Array} menu - Array of dishes
 * @param {string} order - 'asc' or 'desc'
 * @returns sorted menu array
 */
const sortMenu = (menu, order = 'asc') => {
  menu.sort();
  if (order === 'desc') {
    menu.reverse();
  }
  return menu;
};

/**
 * Change UI language
 * @param {string} language
 */
const changeLanguage = (language) => {
  if (language === lang) {
    // if the language is the same as the current language, toggle to the other language
    activeMenu = language === 'fi' ? coursesEn : coursesFi;
    lang = language === 'fi' ? 'en' : 'fi';
  } else {
    // if the language is different from the current language, switch to the new language
    activeMenu = language === 'fi' ? coursesFi : coursesEn;
    lang = language;
  }
  renderMenu(activeMenu);
};

/**
 * Get a random dish fron an array
 * @param {Array} menu - Array of dishes
 * @returns random dish item
 */
const getRandomDish = (menu) => {
  const randomIndex = Math.floor(Math.random() * menu.length);
  return menu[randomIndex];
};

const sortButton = document.querySelector('#sort-button');
sortButton.addEventListener('click', () => {
  renderMenu(sortMenu(activeMenu));
});

const langButton = document.querySelector('#lang-button');
langButton.addEventListener('click', () => {
  if (lang === 'fi') {
    changeLanguage('en');
  } else {
    changeLanguage('fi');
  }
});

const rendButton = document.querySelector('#rend-button');
rendButton.addEventListener('click', () => {
  const randomDish = getRandomDish(activeMenu);
  const randomDishBox = document.createElement('div');
  randomDishBox.textContent = randomDish;
  document.body.append(randomDishBox);
});

// TODO: Add a button for changing the language of the menu
// TODO: Add a button that picks a random dish from the array and displays it
