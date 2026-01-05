import { NextResponse } from "next/server"

const trackers: Map<string, { count: number; resetTime: number }> = new Map()

export function rateLimit(limit: number, interval: number) {
  return (req: Request) => {
    // In a production environment, you might want to use a more robust way to get IP
    const ip = req.headers.get("x-forwarded-for") || "unknown"
    const now = Date.now()
    
    let tracker = trackers.get(ip)
    
    if (!tracker || now > tracker.resetTime) {
      tracker = { count: 0, resetTime: now + interval }
    }
    
    tracker.count++
    trackers.set(ip, tracker)
    
    if (tracker.count > limit) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }
    
    return null
  }
}
