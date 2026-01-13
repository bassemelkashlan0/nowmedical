"use client"

import { useEffect, useRef } from "react"

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

export function GlobalChatbot() {
  const retryCountRef = useRef(0)
  const maxRetries = 5
  const scriptLoadTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Initialize chatbot globally
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Aggressively prevent chatbot from adding dark class to HTML and body elements
    const preventDarkMode = () => {
      const htmlElement = document.documentElement
      const bodyElement = document.body
      
      // Remove dark class from HTML element
      if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark')
      }
      
      // Remove dark class from body element (in case it's added there)
      if (bodyElement && bodyElement.classList.contains('dark')) {
        bodyElement.classList.remove('dark')
      }
    }

    // Override classList.add to prevent adding 'dark' class
    const originalHtmlAdd = document.documentElement.classList.add.bind(document.documentElement.classList)
    const originalBodyAdd = document.body.classList.add.bind(document.body.classList)
    
    document.documentElement.classList.add = function(...tokens: string[]) {
      const filtered = tokens.filter(token => token !== 'dark')
      if (filtered.length > 0) {
        return originalHtmlAdd(...filtered)
      }
      return undefined
    }
    
    document.body.classList.add = function(...tokens: string[]) {
      const filtered = tokens.filter(token => token !== 'dark')
      if (filtered.length > 0) {
        return originalBodyAdd(...filtered)
      }
      return undefined
    }

    // Monitor for dark class being added to HTML and body elements
    const htmlObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          preventDarkMode()
        }
      })
    })

    const bodyObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          preventDarkMode()
        }
      })
    })

    // Start observing HTML and body elements for class changes
    htmlObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    bodyObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    })

    // Check immediately and very frequently (every 50ms for first 5 seconds, then every 200ms)
    preventDarkMode()
    let checkCount = 0
    let slowCheckInterval: NodeJS.Timeout | null = null
    const darkModeCheckInterval = setInterval(() => {
      preventDarkMode()
      checkCount++
      // After 5 seconds (100 checks at 50ms), reduce frequency
      if (checkCount > 100) {
        clearInterval(darkModeCheckInterval)
        // Continue checking but less frequently
        slowCheckInterval = setInterval(preventDarkMode, 200)
      }
    }, 50)

    // Set chatbot configuration (do this first, before script loads)
    window.VG_CONFIG = {
      ID: "sQFliDe4sWM8z8bf", // YOUR AGENT ID
      region: 'eu', // YOUR ACCOUNT REGION 
      render: 'bottom-right', // can be 'full-width' or 'bottom-left' or 'bottom-right'
      // modalMode: true, // Set this to 'true' to open the widget in modal mode
      stylesheets: [
        // Base CONVOCORE CSS
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
        // Add your custom css stylesheets, Can also add relative URL ('/public/your-file.css)
      ],
    }

    // Function to load script with error handling and retry
    const loadChatbotScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script is already loaded
        const existingScript = document.querySelector('script[src*="vg_bundle.js"]') as HTMLScriptElement | null
        if (existingScript && window.__VG_SCRIPT_LOADED) {
          // Script already loaded and verified
          resolve()
          return
        }

        // If script exists but not verified, wait for it
        if (existingScript && !window.__VG_SCRIPT_LOADED) {
          const checkInterval = setInterval(() => {
            if (window.VG || window.__VG_SCRIPT_LOADED) {
              clearInterval(checkInterval)
              window.__VG_SCRIPT_LOADED = true
              resolve()
            }
          }, 100)

          // Timeout after 20 seconds (increased from 10)
          const timeoutId = setTimeout(() => {
            clearInterval(checkInterval)
            if (!window.VG && !window.__VG_SCRIPT_LOADED) {
              reject(new Error('Script load timeout'))
            }
          }, 20000)
          
          // Store timeout for cleanup
          scriptLoadTimeoutRef.current = timeoutId as any
          return
        }

        // Create and load new script
        const VG_SCRIPT = document.createElement("script")
        VG_SCRIPT.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js"
        VG_SCRIPT.async = true
        VG_SCRIPT.defer = true
        VG_SCRIPT.crossOrigin = "anonymous"

        let timeoutId: NodeJS.Timeout | null = null
        let checkVGInterval: NodeJS.Timeout | null = null

        // Set timeout for script loading (30 seconds - increased from 15)
        timeoutId = setTimeout(() => {
          if (checkVGInterval) clearInterval(checkVGInterval)
          if (!window.VG) {
            reject(new Error('Script load timeout'))
          }
        }, 30000)
        
        scriptLoadTimeoutRef.current = timeoutId as any

        // Handle successful load
        VG_SCRIPT.onload = () => {
          if (timeoutId) clearTimeout(timeoutId)
          // Wait a bit for VG to initialize
          checkVGInterval = setInterval(() => {
            if (window.VG) {
              if (checkVGInterval) clearInterval(checkVGInterval)
              window.__VG_SCRIPT_LOADED = true
              scriptLoadTimeoutRef.current = null
              resolve()
            }
          }, 100)

          // Final timeout check (increased to 10 seconds)
          setTimeout(() => {
            if (checkVGInterval) clearInterval(checkVGInterval)
            if (window.VG) {
              window.__VG_SCRIPT_LOADED = true
              scriptLoadTimeoutRef.current = null
              resolve()
            } else {
              // Don't reject if script loaded but VG not initialized yet - it might initialize later
              // Only log in development mode to reduce console noise
              if (process.env.NODE_ENV === 'development') {
                console.debug('Chatbot script loaded but VG object not yet initialized. It may initialize later.')
              }
              scriptLoadTimeoutRef.current = null
              resolve() // Resolve anyway to prevent retry loops
            }
          }, 10000)
        }

        // Handle load error
        VG_SCRIPT.onerror = (error) => {
          if (timeoutId) clearTimeout(timeoutId)
          if (checkVGInterval) clearInterval(checkVGInterval)
          scriptLoadTimeoutRef.current = null
          reject(new Error('Script load failed'))
        }

        // Append to body
        document.body.appendChild(VG_SCRIPT)
      })
    }

    // Function to load script with retry logic
    const loadScriptWithRetry = async (attempt = 0): Promise<void> => {
      try {
        await loadChatbotScript()
        retryCountRef.current = 0 // Reset on success
      } catch (error) {
        retryCountRef.current = attempt + 1
        if (attempt < maxRetries) {
          // Exponential backoff: 2s, 4s, 8s, 16s, 32s
          const delay = Math.min(2000 * Math.pow(2, attempt), 32000)
          setTimeout(() => {
            loadScriptWithRetry(attempt + 1)
          }, delay)
        } else {
          // Only log error in development or if it's a real failure
          if (process.env.NODE_ENV === 'development') {
            console.warn('Chatbot script failed to load after multiple attempts. It may load later or the service may be unavailable:', error)
          }
          // Still continue with image replacement logic in case script loads later
          // Don't throw error to prevent React errors
        }
      }
    }

    // Start loading script
    loadScriptWithRetry()

    // Also set up a passive check to see if script loads later (even after retries fail)
    // This helps in cases where network is slow but eventually connects
    const passiveCheckInterval = setInterval(() => {
      if (window.VG && !window.__VG_SCRIPT_LOADED) {
        window.__VG_SCRIPT_LOADED = true
        clearInterval(passiveCheckInterval)
      }
    }, 5000) // Check every 5 seconds

    // Stop passive checking after 2 minutes
    setTimeout(() => {
      clearInterval(passiveCheckInterval)
    }, 120000)

    const customImagePath = '/images/chatbot-avatar.png'
    const customImageFullPath = window.location.origin + customImagePath

    // Function to set button dimensions
    const setButtonDimensions = () => {
      const chatbotButton = document.querySelector('#vg_chat_toggle') as HTMLButtonElement
      if (chatbotButton) {
        // Set width and height to 80px on the button
        chatbotButton.style.width = '80px'
        chatbotButton.style.height = '80px'
        chatbotButton.style.minWidth = '80px'
        chatbotButton.style.minHeight = '80px'
        chatbotButton.style.maxWidth = '80px'
        chatbotButton.style.maxHeight = '80px'
      }
    }

    // Function to replace chatbot avatar image
    const replaceChatbotImage = () => {
      const chatbotImage = document.querySelector('.vg-open-btn--img') as HTMLImageElement
      if (chatbotImage) {
        // Check if image src is not our custom image (handle both relative and absolute URLs)
        const currentSrc = chatbotImage.src || chatbotImage.getAttribute('src') || ''
        const isCustomImage = currentSrc.includes('chatbot-avatar.png') || 
                             currentSrc === customImageFullPath ||
                             currentSrc.endsWith(customImagePath) ||
                             currentSrc.includes('/images/chatbot-avatar.png')
        
        if (!isCustomImage) {
          chatbotImage.src = customImagePath
          chatbotImage.setAttribute('src', customImagePath)
          chatbotImage.alt = 'Chat Widget Image'
        }
        
        // Always ensure dimensions and styles are set
        chatbotImage.style.width = '80px'
        chatbotImage.style.height = '80px'
        chatbotImage.style.minWidth = '80px'
        chatbotImage.style.minHeight = '80px'
        chatbotImage.style.maxWidth = '80px'
        chatbotImage.style.maxHeight = '80px'
        chatbotImage.style.borderRadius = '0'
        chatbotImage.style.objectFit = 'cover'
        chatbotImage.style.display = 'block'
        
        // Ensure image loads properly
        if (chatbotImage.complete === false) {
          chatbotImage.onerror = () => {
            // If custom image fails, try again
            setTimeout(() => {
              if (chatbotImage.src !== customImagePath) {
                chatbotImage.src = customImagePath
              }
            }, 1000)
          }
        }
      }
      // Also set button dimensions
      setButtonDimensions()
    }

    // Function to observe a specific image element for src and style changes
    const observeImageElement = (image: HTMLImageElement) => {
      const imageObserver = new MutationObserver(() => {
        replaceChatbotImage()
      })
      imageObserver.observe(image, {
        attributes: true,
        attributeFilter: ['src', 'style']
      })
      return imageObserver
    }

    // Function to observe a specific button element for style changes
    const observeButtonElement = (button: HTMLButtonElement) => {
      const buttonObserver = new MutationObserver(() => {
        setButtonDimensions()
      })
      buttonObserver.observe(button, {
        attributes: true,
        attributeFilter: ['style']
      })
      return buttonObserver
    }

    // Store observers for cleanup
    const imageObservers: MutationObserver[] = []
    const buttonObservers: MutationObserver[] = []

    // Use MutationObserver to continuously watch for chatbot button changes
    const observer = new MutationObserver((mutations) => {
      // Check for new nodes being added
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            // Check if the added node is the button or contains it
            const button = (node as Element).id === 'vg_chat_toggle' 
              ? node as HTMLButtonElement 
              : (node as Element).querySelector?.('#vg_chat_toggle') as HTMLButtonElement
            if (button) {
              setButtonDimensions()
              // Also observe this specific button for style changes
              const btnObserver = observeButtonElement(button)
              buttonObservers.push(btnObserver)
            }
            
            // Check if the added node is the image or contains it
            const image = (node as Element).querySelector?.('.vg-open-btn--img') as HTMLImageElement
            if (image) {
              replaceChatbotImage()
              // Also observe this specific image for src changes
              const imgObserver = observeImageElement(image)
              imageObservers.push(imgObserver)
            }
            // Also check if the node itself is the image
            if ((node as Element).classList?.contains('vg-open-btn--img')) {
              const img = node as HTMLImageElement
              replaceChatbotImage()
              const imgObserver = observeImageElement(img)
              imageObservers.push(imgObserver)
            }
            // Also check if the node itself is the button
            if ((node as Element).id === 'vg_chat_toggle') {
              const btn = node as HTMLButtonElement
              setButtonDimensions()
              // Also observe this specific button for style changes
              const btnObserver = observeButtonElement(btn)
              buttonObservers.push(btnObserver)
            }
          }
        })
      })
      
      // Also check for attribute changes (like src or style changes)
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && (mutation.attributeName === 'src' || mutation.attributeName === 'style')) {
          replaceChatbotImage()
          setButtonDimensions()
        }
      })
    })

    // Start observing the document body for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src', 'style']
    })

    // Also observe existing image and button if they're already in the DOM
    const existingImage = document.querySelector('.vg-open-btn--img') as HTMLImageElement
    if (existingImage) {
      const imgObserver = observeImageElement(existingImage)
      imageObservers.push(imgObserver)
    }
    const existingButton = document.querySelector('#vg_chat_toggle') as HTMLButtonElement
    if (existingButton) {
      setButtonDimensions()
      const btnObserver = observeButtonElement(existingButton)
      buttonObservers.push(btnObserver)
    }

    // Also continuously check periodically to catch any missed changes
    const intervalId = setInterval(() => {
      replaceChatbotImage()
      setButtonDimensions()
    }, 500) // Increased to 500ms to reduce overhead

    // Try to replace image and set button dimensions immediately
    replaceChatbotImage()
    setButtonDimensions()

    // Also check after delays to ensure everything is set
    const delayedChecks = [
      setTimeout(() => {
        replaceChatbotImage()
        setButtonDimensions()
      }, 1000),
      setTimeout(() => {
        replaceChatbotImage()
        setButtonDimensions()
      }, 3000),
      setTimeout(() => {
        replaceChatbotImage()
        setButtonDimensions()
      }, 5000),
    ]

    // Cleanup
    return () => {
      observer.disconnect()
      htmlObserver.disconnect()
      bodyObserver.disconnect()
      imageObservers.forEach(imgObserver => imgObserver.disconnect())
      buttonObservers.forEach(btnObserver => btnObserver.disconnect())
      clearInterval(intervalId)
      clearInterval(darkModeCheckInterval)
      if (slowCheckInterval) {
        clearInterval(slowCheckInterval)
      }
      delayedChecks.forEach(timeout => clearTimeout(timeout))
      if (scriptLoadTimeoutRef.current) {
        clearTimeout(scriptLoadTimeoutRef.current)
      }
      // Clean up passive check interval
      clearInterval(passiveCheckInterval)
      // Restore original classList.add methods
      document.documentElement.classList.add = originalHtmlAdd
      document.body.classList.add = originalBodyAdd
    }
  }, [])

  return (
    <>
      {/* Chatbot Overlay Container */}
      <div style={{ width: 0, height: 0 }} id="VG_OVERLAY_CONTAINER">
        {/* CONVOCORE renders the widget here */}
      </div>
    </>
  )
}

