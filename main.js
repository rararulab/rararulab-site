const blocks = document.querySelectorAll('.reveal')

const observer = new IntersectionObserver(
  (entries, self) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting === false) return
      entry.target.classList.add('in-view')
      self.unobserve(entry.target)
    })
  },
  {
    threshold: 0.18,
  },
)

blocks.forEach((block) => observer.observe(block))
