document.addEventListener(
  "click",
  (e) => {
    const isCollapsible = e.target.matches('[data-toggle="collapse"]');

    if (isCollapsible) {
      const collapsible = e.target.closest('[data-toggle="collapse"]');
      const expanded = collapsible.getAttribute("aria-expanded") === "true";
      collapsible.setAttribute("aria-expanded", !expanded);

      const target = e.target.getAttribute("data-target");
      const dataTarget = e.target.getAttribute("data-toggle");
      const collapse = document.querySelector(target);
      collapse.classList.toggle(dataTarget);
    }

    const isDropdown = e.target.matches('[data-toggle="dropdown"]');

    let currentDropdown = null;
    if (isDropdown) {
      const target = e.target.id;
      const dropdownButton = e.target.closest('[data-toggle="dropdown"]');

      currentDropdown = dropdownButton;
      const expanded = dropdownButton.getAttribute("aria-expanded") === "true";
      dropdownButton.setAttribute("aria-expanded", !expanded);
    }

    const expanded = document.querySelectorAll(
      '[aria-expanded="true"].dropdown-toggle'
    );

    expanded.forEach((item) => {
      if (item === currentDropdown) return;
      item.setAttribute("aria-expanded", "false");
    });
  },
  false
);

