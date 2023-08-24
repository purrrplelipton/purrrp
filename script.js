const { log } = console;

/*  */

const showNav = document.getElementById('show-nav');
const hideNav = document.getElementById('hide-nav');
const navList = document.querySelector('.navlist__bar');

function hideNavBar() {
  navList.classList.add('hidden');
  document.body.classList.toggle('restrict');
}

showNav.addEventListener('click', () => {
  navList.classList.remove('hidden');
  document.body.classList.toggle('restrict');
});

hideNav.addEventListener('click', hideNavBar);

const sectionLinks = navList.querySelectorAll('a');

for (const link of sectionLinks) {
  link.addEventListener('click', hideNavBar);
}

const cuboid = document.querySelector('.cuboid');
const faces = cuboid.querySelectorAll('.face');

let angle = 90;

setInterval(() => {
  cuboid.style.transform = `rotateX(${angle}deg)`;
  angle += 90;
}, 5200);

const backdrop = document.createElement('div');
backdrop.setAttribute('role', 'presentation');
backdrop.setAttribute('class', 'backdrop hide');
backdrop.addEventListener('click', ({ target }) => {
  modal.classList.toggle('hide');
  setTimeout(() => {
    target.removeChild(modal);
    target.classList.toggle('hide');
    setTimeout(() => {
      document.body.classList.toggle('restrict');
      document.body.removeChild(target);
    }, 300);
  }, 300);
});

const modal = document.createElement('section');
modal.setAttribute('class', 'modal hide');
modal.addEventListener('click', (e) => e.stopPropagation());

let title = document.createElement('h2');
title.setAttribute('class', 'modal__title');

const screenshotContainer = document.createElement('div');
screenshotContainer.setAttribute(
  'class',
  'modal__project-screenshot-container',
);

let screenshot = document.createElement('img');
screenshot.setAttribute('src', '');
screenshot.setAttribute('alt', '');

screenshotContainer.appendChild(screenshot);

const details = document.createElement('div');
details.setAttribute('class', 'modal__details');

let desc = document.createElement('p');
desc.setAttribute('class', 'details__desc');

const repo$preview = document.createElement('div');
repo$preview.setAttribute('class', 'details__more');

const link = document.createElement('a');
link.setAttribute('target', '_blank');
link.setAttribute('rel', 'noopener noreferrer');

let repo = link.cloneNode();
repo.innerHTML = '<i class="fa-brands fa-github"></i>';

let preview = link.cloneNode();
preview.innerHTML = '<i class="fa-solid fa-link"></i>';

[repo, preview].forEach((aTag) => repo$preview.appendChild(aTag));

[desc, repo$preview].forEach((node) => details.appendChild(node));

modal.appendChild(title);
modal.appendChild(screenshotContainer);
modal.appendChild(details);

// backdrop.appendChild(modal);

const worksSection = document.querySelector('.projects-list');
const works = worksSection.querySelectorAll('.project');

works.forEach((project) => {
  project.addEventListener('click', ({ target }) => {
    // log(target);
    title.innerHTML = target.querySelector('.project-title').textContent;
    const { src, alt } = target.querySelector('.preview');
    screenshot.setAttribute('src', src);
    screenshot.setAttribute('alt', alt);
    desc.innerHTML = target.getAttribute('data-description');
    repo.setAttribute(
      'href',
      `https://github.com/purrrplelipton/${target.getAttribute(
        'data-repository',
      )}.git/`,
    );
    preview.setAttribute(
      'href',
      `https://${target.getAttribute('data-live-URL')}.vercel.app/`,
    );

    document.body.appendChild(backdrop);

    setTimeout(() => {
      document.body.classList.toggle('restrict');
      backdrop.classList.toggle('hide');
      backdrop.appendChild(modal);
      setTimeout(() => modal.classList.toggle('hide'), 100);
    }, 100);
  });
});
