/*
"use client"

import { useVapi } from "@/hooks/use-vapi"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Phone, PhoneOff, AlertCircle } from "lucide-react"

export function VapiWidget() {
  const { isCalling, volumeLevel, start, stop, isConfigured, configError } = useVapi({}, {
    onCallStart: () => console.log("Call started"),
    onCallEnd: () => console.log("Call ended"),
    onError: (err) => console.error("Vapi error", err)
  })

  if (configError) {
    return (
      <Card className="border-red-500 bg-red-50">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2 text-red-600">
            <AlertCircle className="h-5 w-5" />
            <p className="text-sm font-medium">{configError}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">AI Assistant</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className={`h-3 w-3 rounded-full ${isCalling ? "bg-green-500 animate-pulse" : "bg-gray-300"}`} />
              <span className="text-sm font-medium">{isCalling ? "Active" : "Stable"}</span>
            </div>
            {isCalling && (
              <div className="flex items-center space-x-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-1 bg-green-500 rounded-full"
                    style={{ height: `${volumeLevel * 20 * i}px` }}
                  />
                ))}
              </div>
            )}
          </div>
          <Button
            className="w-full"
            variant={isCalling ? "destructive" : "default"}
            onClick={isCalling ? stop : start}
            disabled={!isConfigured}
          >
            {isCalling ? (
              <>
                <PhoneOff className="mr-2 h-4 w-4" />
                End Call
              </>
            ) : (
              <>
                <Phone className="mr-2 h-4 w-4" />
                Start Call
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
*/
