const navList = document.getElementById('navlist');
const navLinks = navList.getElementsByTagName('a');
const showNav = document.getElementById('show-nav');
const hideNav = document.getElementById('hide-nav');

function hideNavBar() {
  if (!navList.classList.contains('hidden')) {
    navList.classList.add('hidden');
  }
}

showNav.addEventListener('click', () => {
  if (navList.classList.contains('hidden')) {
    navList.classList.remove('hidden');
  }
});

hideNav.addEventListener('click', hideNavBar);
for (const link of navLinks) {
  link.addEventListener('click', hideNavBar);
}
