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

  // Note: Chatbot initialization is handled globally in app/layout.tsx
  // This component only provides a button to open the chatbot

  const handleLiveChatClick = () => {
    // Trigger the chatbot to open
    if (typeof window !== 'undefined' && window.VG?.open) {
      window.VG.open()
    }
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
    <div className={`sticky w-full mx-auto top-[64.5px] sm:top-20 md:top-[82px] z-40 ${isActive ? "bg-[#A7D3C4]" : "bg-red-200"}`}>
      <div className="container py-3 sm:py-5 md:py-7 px-4 sm:px-6">
        <div className="flex items-center justify-between md:justify-center gap-4 sm:gap-6 md:gap-[24px]">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-[24px]">
            <div className={`w-6 h-6 sm:w-8 sm:h-8 md:w-[32px] md:h-[32px] flex items-center justify-center rounded-full flex-shrink-0 ${
              isActive ? "bg-[#4DA688]" : "bg-red-400"
            }`}>
              <div
                className={`h-4 w-4 sm:h-5 sm:w-5 md:h-[22px] md:w-[22px] rounded-full ${
                  isActive
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
                Walk-in is {isActive ? "OPEN NOW" : "CLOSED"}
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
            <button
              onClick={handleLiveChatClick}
              className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-[#195A44] hover:bg-[#144636] text-white rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm md:text-base transition-colors duration-200 shadow-sm hover:shadow-md"
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
    </div>
  )
}
