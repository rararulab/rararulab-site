const sections = document.querySelectorAll<HTMLElement>('.reveal');

const observer = new IntersectionObserver(
  (entries, self) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      self.unobserve(entry.target);
    });
  },
  { threshold: 0.12 },
);

sections.forEach((s) => observer.observe(s));
