"use client"

import { useEffect, useState } from "react"

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

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  if (loading) {
    return (
      <div className="bg-[#A7D3C4] z-40 sticky w-full mx-auto top-[82px]">
        <div className="container py-7">
          <div className="flex items-center justify-center gap-[24px] text-sm">
            <div className="text-[#050505]">Loading status...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={ " sticky w-full mx-auto top-[82px] z-40   " +   (isActive ? "bg-[#A7D3C4]" : "bg-red-200 ")}>
      <div className="container py-7">
        <div className="flex items-center justify-center gap-[24px] text-sm">
          <div className="flex items-center  gap-[24px]">
            <div className={`w-[32px] h-[32px] flex items-center justify-center rounded-full ${
              isActive ? "bg-[#4DA688]" : "bg-red-400"
            }`}>
              <div
                className={`h-[22px] w-[22px] rounded-full ${
                  isActive
                    ? "bg-[#195A44] animate-pulse"
                    : "bg-red-600"
                }`}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium block text-3xl text-[#050505]">Walk-in Live Status</span>
              <span className="hidden block sm:inline text-base text-[#050505]">
                Walk-in is {isActive ? "OPEN NOW" : "CLOSED"}
              </span>
            </div>
          </div>

          <div className="flex items-center  gap-[24px]">
            <div className="flex flex-col">
              <span className="font-medium block text-3xl text-[#050505]">
                {formatTime(currentTime)}
              </span>
              <span className="hidden block sm:inline text-base text-[#050505]">
                {formatDate(currentTime)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
