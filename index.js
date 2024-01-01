document.addEventListener("DOMContentLoaded", async () => {
  window.addEventListener("scroll", () => {
    const mainHeader = document.querySelector("header");
    if (window.scrollY >= window.innerHeight - 104)
      mainHeader.classList.add("header-with-shadow");
    else mainHeader.classList.remove("header-with-shadow");
  });

  const backdrop = document.createElement("div");

  const showNav = document.getElementById("show-nav");
  const hideNav = document.getElementById("hide-nav");
  const navList = document.querySelector(".navlist__bar");

  function hideNavBar() {
    navList.classList.add("no-show");
    document.body.classList.remove("restrict");
  }

  hideNav.addEventListener("click", () => hideNavBar());

  showNav.addEventListener("click", () => {
    navList.classList.remove("no-show");
    document.body.classList.add("restrict");
  });

  document.addEventListener("click", ({ target }) => {
    if (!navList.contains(target) && !showNav.contains(target)) {
      navList.classList.add("no-show");
      document.body.classList.remove("restrict");
    }
  });

  const sectionLinks = navList.querySelectorAll("a");

  sectionLinks.forEach((link) => link.addEventListener("click", hideNavBar));

  const cuboid = document.querySelector(".cuboid");

  let angle = 90;

  setInterval(() => {
    cuboid.style.transform = `rotateX(${angle}deg)`;
    angle += 90;
  }, 5200);

  const response = await fetch("./works.json");
  const { projects: projectsData } = await response.json();

  const projectsList = document.querySelector(".projects-list");

  function mod(text, mode) {
    return mode == "hyph"
      ? text
          .toLowerCase()
          .replace(/\s+/g, "-") // Replace spaces with dashes
          .replace(/[^\w\-]+/g, "") // Remove any non-word characters except dashes
          .replace(/\-\-+/g, "-") // Replace multiple dashes with a single dash
      : mode == "abbr"
      ? text
          .split(" ")
          .map((word) => word.charAt(0).toLowerCase())
          .join("")
      : text;
  }

  projectsData.forEach((project, i) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "project");
    button.classList.add(mod(project.id, "hyph"));
    button.dataset.repo = mod(project.id, "hyph");
    button.dataset.description = project.description;
    button.setAttribute("data-live-URL", `tobiii-${mod(project.id, "abbr")}`);

    const img = document.createElement("img");
    img.setAttribute("loading", "lazy");
    img.setAttribute("decoding", "async");
    img.setAttribute("class", "screenshot");
    img.setAttribute("src", `./assets/images/work_${i}.webp`);
    img.setAttribute(
      "alt",
      `A desktop preview image of a ${project.id} project`
    );

    const span = document.createElement("span");
    span.setAttribute("class", "project-title");
    span.textContent = project.id;

    button.appendChild(img);
    button.appendChild(span);
    li.appendChild(button);
    projectsList.appendChild(li);
  });

  function closeModal() {
    modal.classList.add("hide");
    setTimeout(() => {
      modal_backdrop.classList.add("hide");
      document.body.classList.remove("restrict");
      setTimeout(() => {
        modal_backdrop.removeChild(modal);
        modal_backdrop.classList.add("hide");
        setTimeout(() => {
          document.body.removeChild(modal_backdrop);
        }, 300);
      }, 300);
    }, 300);
  }

  let modal_backdrop = backdrop.cloneNode();
  modal_backdrop.setAttribute("role", "presentation");
  modal_backdrop.setAttribute("class", "modal-backdrop hide");
  modal_backdrop.addEventListener("click", () => closeModal());

  const modal = document.createElement("section");
  modal.setAttribute("class", "modal hide");
  modal.addEventListener("click", (e) => e.stopPropagation());
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Tab" || e.keyCode === 9) {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    } else if (e.key === "Escape" || e.keyCode === 27) closeModal();
  });

  let title = document.createElement("h2");
  title.setAttribute("class", "modal__title");

  const link = document.createElement("a");
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");

  const screenshotContainer = link.cloneNode();
  screenshotContainer.setAttribute("href", "");
  screenshotContainer.setAttribute(
    "class",
    "modal__project-screenshot-container"
  );

  let screenshot = document.createElement("img");
  screenshot.setAttribute("src", "");
  screenshot.setAttribute("alt", "");

  screenshotContainer.appendChild(screenshot);

  const details = document.createElement("div");
  details.setAttribute("class", "modal__details");

  let desc = document.createElement("p");
  desc.setAttribute("class", "details__desc");

  const repo$preview = document.createElement("div");
  repo$preview.setAttribute("class", "details__more");

  let repo = link.cloneNode();
  repo.innerHTML = '<i class="fa-brands fa-github"></i>';

  let preview = link.cloneNode();
  preview.innerHTML = '<i class="fa-solid fa-link"></i>';

  [repo, preview].forEach((aTag) => repo$preview.appendChild(aTag));

  [desc, repo$preview].forEach((node) => details.appendChild(node));

  modal.appendChild(title);
  modal.appendChild(screenshotContainer);
  modal.appendChild(details);

  projectsList.addEventListener("click", ({ target }) => {
    const projectBtn = target.closest(".project");
    if (projectBtn) {
      const liveURL = `https://${projectBtn.getAttribute(
        "data-live-url"
      )}.vercel.app/`;
      title.textContent =
        projectBtn.querySelector(".project-title").textContent;
      screenshotContainer.setAttribute("href", liveURL);
      const { src, alt } = projectBtn.querySelector(".screenshot");
      screenshot.setAttribute("src", src);
      screenshot.setAttribute("alt", alt);
      desc.textContent = projectBtn.getAttribute("data-description");
      repo.setAttribute(
        "href",
        `https://github.com/purrrplelipton/${projectBtn.getAttribute(
          "data-repo"
        )}.git/`
      );
      preview.setAttribute("href", liveURL);

      document.body.appendChild(modal_backdrop);

      setTimeout(() => {
        document.body.classList.add("restrict");
        modal_backdrop.classList.remove("hide");
        modal_backdrop.appendChild(modal);
        setTimeout(() => {
          modal.classList.remove("hide");
          // Set focus to the first focusable element within the modal
          const firstFocusableElement = modal.querySelector(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (firstFocusableElement) firstFocusableElement.focus();
        }, 100);
      }, 100);
    }
  });
});
