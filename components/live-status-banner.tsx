"use client"

import { useEffect, useState } from "react"

// Extend Window interface for chatbot
declare global {
  interface Window {
    VG_CONFIG?: {
      ID: string
      region: string
      render: string
      stylesheets?: string[]
    }
    VG?: {
      open?: () => void
    }
  }
}

export function LiveStatusBanner() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isActive, setIsActive] = useState(true)
  const [loading, setLoading] = useState(true)
  const [chatbotReady, setChatbotReady] = useState(false)

  // Fetch status from API
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
        const response = await fetch(`${API_BASE_URL}/status`, {
          credentials: "include",
        })
        const data = await response.json()
        setIsActive(data.isActive ?? true)
      } catch (error) {
        console.error("Error fetching status:", error)
        // Default to active if API fails
        setIsActive(true)
      } finally {
        setLoading(false)
      }
    }

    fetchStatus()

    // Poll for status updates every 30 seconds
    const statusInterval = setInterval(fetchStatus, 30000)

    return () => clearInterval(statusInterval)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Monitor chatbot initialization
  useEffect(() => {
    if (typeof window === 'undefined') return

    const checkChatbotReady = () => {
      // Check if VG is available
      if (window.VG?.open) {
        setChatbotReady(true)
        return true
      }

      // Check if chatbot button exists in DOM - try multiple selectors
      const selectors = [
        '[data-vg-widget]',
        '[class*="vg-"]',
        '[id*="vg-"]',
        '[id*="VG-"]',
        '[class*="chat-widget"]',
        '[class*="chatbot-button"]',
        '[class*="vg-widget"]',
        'button[class*="vg"]',
        '[data-vg]'
      ]

      for (const selector of selectors) {
        const elements = document.querySelectorAll(selector)
        if (elements.length > 0) {
          setChatbotReady(true)
          return true
        }
      }

      return false
    }

    // Check immediately
    if (checkChatbotReady()) {
      return
    }

    // Use MutationObserver to watch for chatbot elements being added
    const observer = new MutationObserver(() => {
      if (checkChatbotReady()) {
        observer.disconnect()
      }
    })

    // Observe the entire document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false,
    })

    // Poll for chatbot ready as backup
    const interval = setInterval(() => {
      if (checkChatbotReady()) {
        clearInterval(interval)
        observer.disconnect()
      }
    }, 500)

    // Listen for script load
    const script = document.querySelector('script[src*="vg_bundle.js"]') as HTMLScriptElement | null
    if (script && script.src) {
      const handleScriptLoad = () => {
        // Wait a bit for VG to initialize after script loads
        setTimeout(() => {
          checkChatbotReady()
        }, 1000)
        script?.removeEventListener('load', handleScriptLoad)
      }

      // Always add event listener (it's safe even if already loaded)
      script.addEventListener('load', handleScriptLoad)

      // Also try after delays in case load event doesn't fire or script is already loaded
      setTimeout(() => {
        checkChatbotReady()
      }, 1000)
      setTimeout(() => {
        checkChatbotReady()
      }, 3000)
    }

    // Also listen for custom events that might be fired by the chatbot
    const handleVGReady = () => {
      setChatbotReady(true)
      observer.disconnect()
    }
    window.addEventListener('vg-ready', handleVGReady)
    window.addEventListener('VGReady', handleVGReady)
    window.addEventListener('vg:ready', handleVGReady)

    // Cleanup after 30 seconds
    const timeout = setTimeout(() => {
      observer.disconnect()
      clearInterval(interval)
    }, 30000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
      observer.disconnect()
      window.removeEventListener('vg-ready', handleVGReady)
      window.removeEventListener('VGReady', handleVGReady)
      window.removeEventListener('vg:ready', handleVGReady)
    }
  }, [])

  // Note: Chatbot initialization is handled globally in app/layout.tsx via GlobalChatbot component
  // This component only provides a button to open the chatbot

  const handleLiveChatClick = () => {
    if (typeof window === 'undefined') return

    console.log('Live Chat button clicked - attempting to open chatbot...')
    console.log('window.VG:', window.VG)
    console.log('window.VG_CONFIG:', window.VG_CONFIG)

    // Try multiple methods to open the chatbot
    const tryOpenChatbot = () => {
      // Method 1: Use window.VG.open() if available
      if (window.VG?.open && typeof window.VG.open === 'function') {
        try {
          console.log('Trying window.VG.open()...')
          window.VG.open()
          return true
        } catch (error) {
          console.error('Error calling window.VG.open():', error)
        }
      }

      // Method 1b: Try other VG methods
      if (window.VG) {
        const vgMethods = ['show', 'toggle', 'openChat', 'openWidget', 'launch']
        for (const method of vgMethods) {
          if (typeof (window.VG as any)[method] === 'function') {
            try {
              console.log(`Trying window.VG.${method}()...`)
                ; (window.VG as any)[method]()
              return true
            } catch (error) {
              console.error(`Error calling window.VG.${method}():`, error)
            }
          }
        }
      }

      // Method 2: Search for ALL possible chatbot elements
      const allSelectors = [
        '[data-vg-widget]',
        '[data-vg]',
        '[class*="vg-"]',
        '[class*="VG-"]',
        '[id*="vg-"]',
        '[id*="VG-"]',
        '[class*="chat-widget"]',
        '[class*="chatbot-button"]',
        '[class*="vg-widget"]',
        'button[class*="vg"]',
        'div[class*="vg"]',
        '[role="button"][class*="vg"]',
        'button[aria-label*="chat" i]',
        'button[aria-label*="message" i]',
        '[role="button"][aria-label*="chat" i]',
        '.vg-widget-button',
        '#vg-widget-button',
        '[data-testid*="chat"]',
        '[data-testid*="vg"]',
      ]

      for (const selector of allSelectors) {
        try {
          const elements = document.querySelectorAll(selector)
          elements.forEach((element) => {
            const el = element as HTMLElement
            console.log(`Found element with selector "${selector}":`, el)
            // Try clicking
            el.click()
            // Also try dispatching events
            el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
            el.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }))
            el.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true }))
          })
          if (elements.length > 0) {
            return true
          }
        } catch (error) {
          console.error(`Error with selector "${selector}":`, error)
        }
      }

      // Method 3: Search in VG_OVERLAY_CONTAINER and all its children
      const overlayContainer = document.getElementById('VG_OVERLAY_CONTAINER')
      if (overlayContainer) {
        console.log('Found VG_OVERLAY_CONTAINER:', overlayContainer)
        // Find all clickable elements
        const clickableElements = overlayContainer.querySelectorAll('button, [role="button"], div[onclick], a, [tabindex="0"]')
        clickableElements.forEach((el) => {
          const element = el as HTMLElement
          console.log('Found clickable element in container:', element)
          element.click()
          element.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
        })
        if (clickableElements.length > 0) {
          return true
        }
      }

      // Method 4: Search for iframes (chatbot might be in iframe)
      const iframes = document.querySelectorAll('iframe')
      iframes.forEach((iframe) => {
        try {
          const iframeSrc = iframe.src || iframe.getAttribute('src') || ''
          if (iframeSrc.includes('vg') || iframeSrc.includes('chat') || iframeSrc.includes('convo')) {
            console.log('Found potential chatbot iframe:', iframe)
            // Try to access iframe content (might be blocked by CORS)
            try {
              const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
              if (iframeDoc) {
                const iframeButton = iframeDoc.querySelector('button, [role="button"]') as HTMLElement
                if (iframeButton) {
                  iframeButton.click()
                  return true
                }
              }
            } catch (e) {
              console.log('Cannot access iframe content (CORS):', e)
            }
          }
        } catch (error) {
          console.error('Error checking iframe:', error)
        }
      })

      // Method 5: Try dispatching custom events
      try {
        window.dispatchEvent(new CustomEvent('vg-open'))
        window.dispatchEvent(new CustomEvent('VG-open'))
        window.dispatchEvent(new CustomEvent('open-chat'))
        window.dispatchEvent(new CustomEvent('chatbot-open'))
      } catch (error) {
        console.error('Error dispatching custom events:', error)
      }

      // Method 6: Try to find elements by position (bottom-right corner)
      const allElements = document.querySelectorAll('*')
      for (const el of allElements) {
        const element = el as HTMLElement
        const rect = element.getBoundingClientRect()
        const isBottomRight = rect.bottom > window.innerHeight - 100 && rect.right > window.innerWidth - 100
        if (isBottomRight && (element.tagName === 'BUTTON' || element.getAttribute('role') === 'button')) {
          console.log('Found potential chatbot button in bottom-right:', element)
          element.click()
          return true
        }
      }

      return false
    }

    // Try immediately
    if (tryOpenChatbot()) {
      console.log('Chatbot opened successfully!')
      return
    }

    // If not ready, wait and retry
    const checkAndOpen = (attempts = 0) => {
      if (attempts > 30) {
        // After 15 seconds (30 * 500ms), give up
        console.warn('Chatbot failed to load after multiple attempts')
        console.log('Available window.VG:', window.VG)
        console.log('All elements with "vg" in class/id:', document.querySelectorAll('[class*="vg"], [id*="vg"]'))
        return
      }

      if (tryOpenChatbot()) {
        console.log('Chatbot opened successfully after retry!')
        return
      }

      // Check again after 500ms
      setTimeout(() => checkAndOpen(attempts + 1), 500)
    }

    // Start checking
    checkAndOpen()
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  if (loading) {
    return (
      <div className="bg-[#A7D3C4] z-40 sticky w-full mx-auto top-16 sm:top-20 md:top-[82px]">
        <div className="container py-3 sm:py-5 md:py-7 px-4 sm:px-6">
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
            <div className="text-[#050505]">Loading status...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`sticky w-full mx-auto top-[64.5px] sm:top-20 md:top-[81px] z-40 ${isActive ? "bg-[#A7D3C4]" : "bg-red-200"}`}>
      <div className="container py-3 sm:py-5 md:py-7 px-4 sm:px-6">
        <div className="flex relative items-center justify-center flex-wrap sm:justify-center gap-4 sm:gap-6 md:gap-[24px]">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-[24px]">
            <div className={`w-6 h-6 sm:w-8 sm:h-8 md:w-[32px] md:h-[32px] flex items-center justify-center rounded-full flex-shrink-0 ${isActive ? "bg-[#4DA688]" : "bg-red-400"
              }`}>
              <div
                className={`h-4 w-4 sm:h-5 sm:w-5 md:h-[22px] md:w-[22px] rounded-full ${isActive
                  ? "bg-[#195A44] animate-pulse"
                  : "bg-red-600"
                  }`}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium block text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#050505] leading-tight">
                Walk-in Live Status
              </span>
              <span className="block text-xs sm:text-sm md:text-base text-[#050505]">
                Walk-in is {isActive ? <span className="font-bold text-xl  text-[#195A44] ml-1 underline">OPEN NOW</span> : <span className="font-bold text-xl  text-red-600 ml-1 underline">CLOSED</span>}
              </span>
            </div>
          </div>  

          <div className="flex items-center gap-3 sm:gap-4 md:gap-[24px]">
            <div className="flex flex-col text-center sm:text-left">
              <span className="font-medium block text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#050505] leading-tight">
                {formatTime(currentTime)}
              </span>
              <span className="block text-xs sm:text-sm md:text-base text-[#050505]">
                {formatDate(currentTime)}
              </span>
            </div>

          </div>

          <button
            onClick={handleLiveChatClick}
            className=" sm:absolute right-2 flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-[#195A44] hover:bg-[#144636] text-white rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm md:text-base transition-colors duration-200 shadow-sm hover:shadow-md"
            aria-label="Open Live Chat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="hidden sm:inline">Live Chat</span>
            <span className="sm:hidden">Chat</span>
          </button>

        </div>
      </div>
    </div>
  )
}
