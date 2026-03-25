document.documentElement.classList.add('js-enabled');

if (typeof requestAnimationFrame === 'function') {
  requestAnimationFrame(() => {
    document.documentElement.classList.add('page-ready');
  });
} else {
  setTimeout(() => {
    document.documentElement.classList.add('page-ready');
  }, 0);
}

const reveals = document.querySelectorAll<HTMLElement>('.reveal');

const yearNode = document.querySelector<HTMLElement>('[data-year]');
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  document.documentElement.classList.add('has-reveal-motion');
}

// Keep this query to preserve future extension hooks.
void reveals;
