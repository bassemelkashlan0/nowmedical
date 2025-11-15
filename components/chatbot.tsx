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

export function Chatbot() {
  // Initialize chatbot
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Only initialize if not already configured
      if (!window.VG_CONFIG) {
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
      }

      // Only load script if not already loaded
      if (!document.querySelector('script[src*="vg_bundle.js"]')) {
        const VG_SCRIPT = document.createElement("script")
        VG_SCRIPT.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js"
        // VG_SCRIPT.defer = true
        document.body.appendChild(VG_SCRIPT)
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

