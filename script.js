const { log } = console;

/*  */

const showNav = document.getElementById('show-nav');
const hideNav = document.getElementById('hide-nav');
const navList = document.querySelector('.navlist__bar');

function hideNavBar() {
  navList.classList.add('hidden');
  document.body.removeAttribute('style');
}

showNav.addEventListener('click', () => {
  navList.classList.remove('hidden');
  document.body.style = `
    height: 100vh !important;
    overflow: hidden !important;
  `;
});

hideNav.addEventListener('click', hideNavBar);

const navLinks = navList.querySelectorAll('a');

for (const link of navLinks) {
  link.addEventListener('click', hideNavBar);
}

const cuboid = document.querySelector('.cuboid');
const faces = cuboid.querySelectorAll('.face');

let angle = 90;

setInterval(() => {
  cuboid.style.transform = `rotateX(${angle}deg)`;
  angle += 90;
}, 5200);

const modal = document.createElement('div');
modal.setAttribute('role', 'presentation');
modal.style = `
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: grid;
  place-items: center;
`;
modal.addEventListener('click', ({}) => {
  document.body.removeChild(modal);
  document.body.removeAttribute('style');
  workTitle = '';
  workDesc = '';
  workPreview.src = '';
  workPreview.alt = '';
});

const content = document.createElement('section');
content.style = `
  max-width: 90%;
  padding: 2em;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  background-color: #fff;
`;
content.addEventListener('click', function (e) {
  return e.stopPropagation();
});

let workTitle = document.createElement('h2'),
  workPreview = document.createElement('img'),
  workDesc = document.createElement('p');

content.appendChild(workTitle);
content.appendChild(workPreview);
content.appendChild(workDesc);

modal.appendChild(content);

const endeavors = document.querySelector('.works-list');
const works = endeavors.querySelectorAll('.work');

works.forEach((work) => {
  work.addEventListener('click', ({ target }) => {
    document.body.appendChild(modal);
    document.body.style = `
      height: 100vh !important;
      overflow: hidden !important;
    `;

    const title = target.querySelector('.work-title');
    const image = target.querySelector('.preview');
    const description = target.getAttribute('data-description');

    workTitle.textContent = title.textContent;
    workPreview.src = image.src;
    workPreview.alt = image.alt;
    workDesc.textContent = description;
  });
});
