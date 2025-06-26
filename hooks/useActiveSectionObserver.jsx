import { useEffect } from "react"

export default function useActiveSectionObserver(setActiveSection) {
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id")
            if (id) setActiveSection(id)
          }
        })
      },
      {
        root: null,
        threshold: 0.6, // Section is 60% visible
      }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [setActiveSection])
}
