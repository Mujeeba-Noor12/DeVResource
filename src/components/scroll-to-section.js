"use client"

import { useEffect } from "react"

export function useScrollToSection() {
  useEffect(() => {
    // Function to handle smooth scrolling with offset for fixed header
    const handleSmoothScroll = (e) => {
      // Only process internal anchor links
      const href = e.currentTarget.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()

        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          // Get the height of the fixed navbar (adjust this value if needed)
          const navbarHeight = 80

          // Calculate the target position with offset
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight

          // Smooth scroll to the target
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })

          // Update URL without scrolling (optional)
          window.history.pushState(null, "", href)
        }
      }
    }

    // Add click event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    // Clean up event listeners
    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [])
}

export function ScrollToSection({ children }) {
  useScrollToSection()
  return <>{children}</>
}
