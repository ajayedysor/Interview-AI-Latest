/*
"use client"

import { useState, useEffect } from "react"
import Vapi from "@vapi-ai/web"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, PhoneOff, Mic, MicOff } from "lucide-react"

export default function VapiDemoPage() {
  const [vapi, setVapi] = useState<Vapi | null>(null)
  const [isCalling, setIsCalling] = useState(false)
  const [volumeLevel, setVolumeLevel] = useState(0)

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch("/api/vapi/config")
        const { publicKey } = await response.json()
        const vapiInstance = new Vapi(publicKey)
        setVapi(vapiInstance)

        vapiInstance.on("call-start", () => setIsCalling(true))
        vapiInstance.on("call-end", () => {
          setIsCalling(false)
          setVolumeLevel(0)
        })
        vapiInstance.on("volume-level", (level) => setVolumeLevel(level))
      } catch (error) {
        console.error("Error initializing Vapi:", error)
      }
    }

    fetchConfig()
  }, [])

  const startCall = () => {
    if (vapi) {
      vapi.start("assistant-id-placeholder")
    }
  }

  const endCall = () => {
    if (vapi) {
      vapi.stop()
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Vapi SDK Demo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <div className={`relative h-24 w-24 rounded-full flex items-center justify-center transition-all ${isCalling ? "bg-green-100 ring-8 ring-green-50" : "bg-gray-100"}`}>
              {isCalling ? <Mic className="h-10 w-10 text-green-600" /> : <MicOff className="h-10 w-10 text-gray-400" />}
              {isCalling && (
                <div 
                  className="absolute inset-0 rounded-full border-4 border-green-500 transition-all duration-75"
                  style={{ transform: `scale(${1 + volumeLevel * 0.5})`, opacity: 1 - volumeLevel }}
                />
              )}
            </div>
            
            <div className="text-center">
              <h3 className="font-semibold text-lg">{isCalling ? "Currently Speaking" : "Ready to Start"}</h3>
              <p className="text-sm text-gray-500">
                {isCalling ? "The AI assistant is listening..." : "Click the button below to start a conversation"}
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            {!isCalling ? (
              <Button className="w-full" onClick={startCall}>
                <Phone className="mr-2 h-4 w-4" />
                Start Interview
              </Button>
            ) : (
              <Button variant="destructive" className="w-full" onClick={endCall}>
                <PhoneOff className="mr-2 h-4 w-4" />
                End Session
              </Button>
            )}
          </div>

          {isCalling && (
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Volume Level</span>
                <span>{Math.round(volumeLevel * 100)}%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 transition-all duration-75"
                  style={{ width: `${volumeLevel * 100}%` }}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
*/
