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
    __VG_SCRIPT_LOADED?: boolean
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
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.nowmedical.ca/api'
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
      if (window.VG?.open || window.VG) {
        setChatbotReady(true)
        return true
      }

      // Check if chatbot button exists in DOM - try multiple selectors
      const selectors = [
        '#vg_chat_toggle',
        '[data-vg-widget]',
        '[class*="vg-"]',
        '[id*="vg-"]',
        '[id*="VG-"]',
        '[class*="chat-widget"]',
        '[class*="chatbot-button"]',
        '[class*="vg-widget"]',
        'button[class*="vg"]',
        '[data-vg]',
        '.vg-open-btn--img'
      ]

      for (const selector of selectors) {
        try {
          const elements = document.querySelectorAll(selector)
          if (elements.length > 0) {
            setChatbotReady(true)
            return true
          }
        } catch (e) {
          // Ignore selector errors
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
      attributes: true,
      attributeFilter: ['id', 'class', 'src']
    })

    // Poll for chatbot ready as backup (increased duration)
    const interval = setInterval(() => {
      if (checkChatbotReady()) {
        clearInterval(interval)
        observer.disconnect()
      }
    }, 500)

    // Listen for script load - handle both existing and new scripts
    const setupScriptListener = () => {
      const script = document.querySelector('script[src*="vg_bundle.js"]') as HTMLScriptElement | null

      if (script) {
        // Check if script is already loaded
        const isScriptLoaded = window.__VG_SCRIPT_LOADED || window.VG !== undefined

        if (isScriptLoaded) {
          // Script already loaded, check for VG after a delay
          setTimeout(() => {
            checkChatbotReady()
          }, 1000)
          setTimeout(() => {
            checkChatbotReady()
          }, 3000)
        } else {
          // Script is loading, add event listener
          const handleScriptLoad = () => {
            // Wait a bit for VG to initialize after script loads
            setTimeout(() => {
              checkChatbotReady()
            }, 1000)
            setTimeout(() => {
              checkChatbotReady()
            }, 3000)
            script?.removeEventListener('load', handleScriptLoad)
          }
          script.addEventListener('load', handleScriptLoad)

          // Also check if script loads before event fires
          setTimeout(() => {
            if (window.VG || window.__VG_SCRIPT_LOADED) {
              checkChatbotReady()
            }
          }, 2000)
        }
      } else {
        // Script not found yet, check periodically
        const scriptCheckInterval = setInterval(() => {
          const foundScript = document.querySelector('script[src*="vg_bundle.js"]') as HTMLScriptElement | null
          if (foundScript) {
            clearInterval(scriptCheckInterval)
            setupScriptListener()
          }
        }, 500)

        // Stop checking after 30 seconds
        setTimeout(() => {
          clearInterval(scriptCheckInterval)
        }, 30000)
      }
    }

    setupScriptListener()

    // Also listen for custom events that might be fired by the chatbot
    const handleVGReady = () => {
      setChatbotReady(true)
      observer.disconnect()
    }
    window.addEventListener('vg-ready', handleVGReady)
    window.addEventListener('VGReady', handleVGReady)
    window.addEventListener('vg:ready', handleVGReady)

    // Extended cleanup timeout (60 seconds instead of 30)
    const timeout = setTimeout(() => {
      observer.disconnect()
      clearInterval(interval)
    }, 60000)

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
        <div className="flex relative items-center justify-between flex-wrap gap-2 sm:gap-4 md:gap-6">
          {/* Walk-in Live Status Section */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
            <div className={`w-6 h-6 sm:w-8 sm:h-8 md:w-[32px] md:h-[32px] flex items-center justify-center rounded-full flex-shrink-0 animate-smooth-blink ${isActive ? "bg-[#4DA688]" : "bg-red-400"
              }`}>
              <div
                className={`h-4 w-4 sm:h-5 sm:w-5 md:h-[22px] md:w-[22px] rounded-full ${isActive
                  ? "bg-[#195A44]"
                  : "bg-red-600"
                  }`}
              />
            </div>
            <div className="flex flex-col" style={{ gap: '10px' }}>
              <span className="font-bold block text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#050505] leading-tight whitespace-nowrap">
                Walk-in Live Status
              </span>
              <span className="block text-xs sm:text-sm md:text-base text-[#050505]">
                {isActive ? <span className="font-bold text-xl text-white bg-[#195A44] px-4 py-1.5 rounded-full ml-1 uppercase">OPEN NOW</span> : <span className="font-bold text-xl text-white bg-red-600 px-4 py-1.5 rounded-full ml-1 uppercase">CLOSED</span>}
              </span>
            </div>
          </div>

          {/* Service Details Section - Only show when status is OPEN */}
          {isActive && (
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              {/* Short Wait */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#299470"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="text-[14px] font-bold sm:text-sm md:text-base text-[#050505] whitespace-nowrap">
                  Short Wait
                </span>
              </div>

              {/* No Appointment Needed */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none" className="sm:w-5 sm:h-5">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4153 2.28906C10.2238 2.28906 10.0341 2.32678 9.85719 2.40007C9.68026 2.47336 9.51949 2.58078 9.38407 2.7162C9.24865 2.85162 9.14123 3.01238 9.06795 3.18932C8.99466 3.36625 8.95694 3.55588 8.95694 3.7474C8.95694 3.93891 8.99466 4.12854 9.06795 4.30548C9.14123 4.48241 9.24865 4.64317 9.38407 4.77859C9.51949 4.91401 9.68026 5.02143 9.85719 5.09472C10.0341 5.16801 10.2238 5.20573 10.4153 5.20573C10.802 5.20573 11.173 5.05208 11.4465 4.77859C11.72 4.5051 11.8736 4.13417 11.8736 3.7474C11.8736 3.36062 11.72 2.98969 11.4465 2.7162C11.173 2.44271 10.802 2.28906 10.4153 2.28906ZM7.70694 3.7474C7.70694 3.0291 7.99228 2.34023 8.50019 1.83231C9.0081 1.3244 9.69698 1.03906 10.4153 1.03906C11.1336 1.03906 11.8224 1.3244 12.3304 1.83231C12.8383 2.34023 13.1236 3.0291 13.1236 3.7474C13.1236 4.46569 12.8383 5.15457 12.3304 5.66248C11.8224 6.17039 11.1336 6.45573 10.4153 6.45573C9.69698 6.45573 9.0081 6.17039 8.50019 5.66248C7.99228 5.15457 7.70694 4.46569 7.70694 3.7474ZM11.2719 8.95823C11.2003 8.95508 11.1286 8.95425 11.0569 8.95573H10.1478L10.0719 9.71573C9.92694 11.1657 9.8761 11.7491 10.0053 12.2999C10.1353 12.8516 10.4403 13.3507 11.2161 14.5849L13.3611 17.9982C13.447 18.1385 13.4742 18.307 13.4366 18.4672C13.3991 18.6274 13.2999 18.7663 13.1606 18.8539C13.0213 18.9414 12.8531 18.9705 12.6925 18.9348C12.5319 18.8991 12.3919 18.8015 12.3028 18.6632L10.1578 15.2499L10.0969 15.1532C9.4011 14.0474 8.97194 13.3649 8.7886 12.5866C8.60527 11.8082 8.6861 11.0049 8.81694 9.70406L8.82777 9.59073L8.8911 8.95656C8.47444 8.95906 8.16444 8.96656 7.9161 8.9974C7.6011 9.0349 7.45444 9.10156 7.35027 9.1849C7.24694 9.26823 7.15027 9.39656 7.04444 9.69573C6.9336 10.0099 6.83777 10.4357 6.69527 11.0766L6.44194 12.2166C6.40402 12.3764 6.30471 12.5149 6.16548 12.602C6.02625 12.6892 5.8583 12.7181 5.69796 12.6824C5.53762 12.6467 5.39779 12.5493 5.3087 12.4113C5.21962 12.2733 5.18845 12.1057 5.22194 11.9449L5.4836 10.7691C5.61527 10.1741 5.72694 9.67406 5.8661 9.27906C6.0136 8.86073 6.21527 8.49323 6.5686 8.2099C6.92194 7.92656 7.3236 7.8099 7.76444 7.75573C8.18027 7.70573 8.69277 7.70573 9.30194 7.70573H11.0778C11.1911 7.70573 11.2786 7.70573 11.3611 7.71156C11.815 7.74406 12.249 7.91097 12.6077 8.19102C12.9664 8.47108 13.2336 8.85159 13.3753 9.28406C13.4003 9.3624 13.4219 9.44823 13.4503 9.55823L13.4544 9.57823C13.5011 9.7649 13.5153 9.81823 13.5286 9.8549C13.7036 10.3599 14.2328 10.6507 14.7528 10.5274C14.7911 10.5191 14.8436 10.5016 15.0261 10.4407L15.6344 10.2382C15.7896 10.193 15.9563 10.2096 16.0995 10.2846C16.2427 10.3596 16.3512 10.4872 16.4024 10.6406C16.4535 10.7939 16.4432 10.9611 16.3737 11.1071C16.3041 11.253 16.1807 11.3663 16.0294 11.4232L15.4211 11.6266L15.3944 11.6349C15.2783 11.6762 15.1604 11.7124 15.0411 11.7432C14.4888 11.8741 13.9076 11.7954 13.41 11.5223C12.9124 11.2491 12.5339 10.8011 12.3478 10.2649C12.3094 10.1475 12.2764 10.0285 12.2486 9.90823L12.2419 9.88073C12.2259 9.81071 12.2075 9.74123 12.1869 9.6724C12.1225 9.47601 12.0011 9.30323 11.8381 9.17606C11.6752 9.04888 11.4781 8.97306 11.2719 8.95823ZM8.6786 14.0607C8.81651 14.1527 8.91224 14.2956 8.94475 14.4582C8.97725 14.6207 8.94387 14.7895 8.85194 14.9274L6.35194 18.6774C6.30685 18.7467 6.24847 18.8063 6.18017 18.8529C6.11188 18.8994 6.03502 18.932 5.95407 18.9486C5.87311 18.9653 5.78965 18.9657 5.70852 18.9499C5.62739 18.9341 5.55021 18.9023 5.48144 18.8565C5.41266 18.8106 5.35367 18.7516 5.30787 18.6828C5.26206 18.614 5.23036 18.5368 5.2146 18.4556C5.19883 18.3745 5.19932 18.2911 5.21603 18.2101C5.23274 18.1292 5.26533 18.0523 5.31194 17.9841L7.81194 14.2341C7.90389 14.0962 8.04685 14.0004 8.20937 13.9679C8.3719 13.9354 8.54069 13.9688 8.6786 14.0607Z" fill="#299470" />
                </svg>
                <span className="text-[14px] font-bold sm:text-sm md:text-base text-[#050505] whitespace-nowrap">
                  No Appointment Needed
                </span>
              </div>

              {/* Directions */}
              <a 
                href="https://share.google/CkrlunWzewWZjaPmv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity"
              >
                <img src="/icons/pin-outline-icon.svg" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-[14px] font-bold sm:text-sm md:text-base text-[#050505] underline whitespace-nowrap">
                  Directions
                </span>
              </a>
            </div>
          )}

          {/* Live Chat Button */}
          <button
            onClick={handleLiveChatClick}
            className="flex items-center gap-2 px-3 py-1.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-[#195A44] hover:bg-[#144636] text-white rounded-lg sm:rounded-xl font-medium text-[10px] sm:text-sm md:text-base transition-colors duration-200 shadow-sm hover:shadow-md flex-shrink-0"
            aria-label="Open Live Chat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
            <span className="sm:hidden">Live Chat</span>
          </button>
        </div>
      </div>
    </div>
  )
}
