"use client"

import { useEffect } from "react"

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

export function GlobalChatbot() {
  // Initialize chatbot globally
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set chatbot configuration
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

      // Only load script if not already loaded
      if (!document.querySelector('script[src*="vg_bundle.js"]')) {
        const VG_SCRIPT = document.createElement("script")
        VG_SCRIPT.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js"
        document.body.appendChild(VG_SCRIPT)
      }

      const customImagePath = '/images/chatbot-avatar.png'
      const customImageFullPath = window.location.origin + customImagePath

      // Function to set button dimensions
      const setButtonDimensions = () => {
        const chatbotButton = document.querySelector('#vg_chat_toggle') as HTMLButtonElement
        if (chatbotButton) {
          // Set width and height to 70px on the button
          if (chatbotButton.style.width !== '70px' || chatbotButton.style.height !== '70px') {
            chatbotButton.style.width = '70px'
            chatbotButton.style.height = '70px'
          }
        }
      }

      // Function to replace chatbot avatar image
      const replaceChatbotImage = () => {
        const chatbotImage = document.querySelector('.vg-open-btn--img') as HTMLImageElement
        if (chatbotImage) {
          // Check if image src is not our custom image (handle both relative and absolute URLs)
          const currentSrc = chatbotImage.src
          const isCustomImage = currentSrc.includes('chatbot-avatar.png') || 
                               currentSrc === customImageFullPath ||
                               currentSrc.endsWith(customImagePath)
          
          if (!isCustomImage) {
            chatbotImage.src = customImagePath
            chatbotImage.alt = 'Chat Widget Image'
            // Set width and height to 70px
            chatbotImage.style.width = '70px'
            chatbotImage.style.height = '70px'
            return true
          }
          // Also ensure width and height are set even if image is already custom
          if (chatbotImage.style.width !== '70px' || chatbotImage.style.height !== '70px') {
            chatbotImage.style.width = '70px'
            chatbotImage.style.height = '70px'
          }
        }
        // Also set button dimensions
        setButtonDimensions()
        return false
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
      }, 300)

      // Try to replace image and set button dimensions immediately
      replaceChatbotImage()
      setButtonDimensions()

      // Cleanup
      return () => {
        observer.disconnect()
        imageObservers.forEach(imgObserver => imgObserver.disconnect())
        buttonObservers.forEach(btnObserver => btnObserver.disconnect())
        clearInterval(intervalId)
      }
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

