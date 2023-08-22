const showNav = document.getElementById('show-nav');
const hideNav = document.getElementById('hide-nav');
const navList = document.querySelector('.navlist__bar');
const navLinks = navList.querySelectorAll('a');
const cuboid = document.querySelector('.cuboid');
const faces = cuboid.querySelectorAll('.face');

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

let angle = 0;

setInterval(() => {
  cuboid.style.transform = `rotateX(${angle}deg)`;
  angle += 90;
}, 5375);
