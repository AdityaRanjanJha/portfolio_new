'use client'
import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    // Scroll to top on component mount (page load/reload)
    window.scrollTo(0, 0)
    
    // Set scroll restoration to manual to prevent browser from restoring scroll position
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return null
}
