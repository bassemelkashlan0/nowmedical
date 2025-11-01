"use client"

import { useEffect, useState } from "react"

export function LiveStatusBanner() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const currentMinutes = hours * 60 + minutes

    // Open from 7:30 AM (450 minutes) to 11:00 PM (1380 minutes)
    const openTime = 7 * 60 + 30 // 7:30 AM
    const closeTime = 23 * 60 // 11:00 PM

    setIsOpen(currentMinutes >= openTime && currentMinutes < closeTime)
  }, [currentTime])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  const formatDate = () => {
    return currentTime.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  return (
    // <div className="border-b bg-accent/50">
    //   <div className="container flex items-center justify-center gap-3 py-2 text-sm">
    //     <div className="flex items-center gap-2">
    //       <div className={`h-2 w-2 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"}`} />
    //       <span className="font-medium">Walk-in Live Status</span>
    //     </div>
    //     <span className="font-semibold">{formatTime(currentTime)}</span>
    //     <span className="text-muted-foreground">Walk-in is {isOpen ? "OPEN NOW" : "CLOSED NOW"}</span>
    //     <span className="text-muted-foreground">{formatDate()}</span>
    //   </div>
    // </div>

    <div className="bg-[#A7D3C4] ">
      <div className="container py-7">
        <div className="flex items-center justify-center gap-[24px] text-sm">
          <div className="flex items-center  gap-[24px]">
            <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#4DA688] rounded-full">
              <div className="h-[22px] w-[22px]  rounded-full bg-[#195A44] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold block text-3xl text-[#050505]">Walk-in Live Status</span>
              <span className="hidden block sm:inline text-base text-[#050505]">Walk-in is OPEN NOW</span>
            </div>
          </div>

          {/* <span className="font-bold text-[#1A5F56]">OPEN NOW</span> */}
          <div className="flex items-center  gap-[24px]">

            <div className="flex flex-col">
              <span className="font-semibold block text-3xl text-[#050505]">03:40 PM</span>
              <span className="hidden block sm:inline text-base text-[#050505]">17-10-2025</span>
            </div>
          </div>          </div>
      </div>
    </div>
  )
}
