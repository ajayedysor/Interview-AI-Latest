/*
import { useEffect, useRef, useState, useCallback } from "react"
import Vapi from "@vapi-ai/web"

interface VapiOptions {
  onCallStart?: () => void
  onCallEnd?: (reason: string) => void
  onError?: (error: any) => void
}

export function useVapi(variableValues: any, options: VapiOptions, meetingId?: string, audioStream?: MediaStream | null) {
  const [isCalling, setIsCalling] = useState(false)
  const [volumeLevel, setVolumeLevel] = useState(0)
  const [isConfigured, setIsConfigured] = useState(false)
  const [configError, setConfigError] = useState<string | null>(null)
  const vapiRef = useRef<Vapi | null>(null)

  useEffect(() => {
    async function fetchConfig() {
      try {
        const response = await fetch("/api/vapi/config")
        const data = await response.json()
        if (data.publicKey && data.assistantId) {
          vapiRef.current = new Vapi(data.publicKey)
          setIsConfigured(true)
          
          vapiRef.current.on("call-start", () => {
            setIsCalling(true)
            options.onCallStart?.()
          })

          vapiRef.current.on("call-end", () => {
            setIsCalling(false)
            setVolumeLevel(0)
            options.onCallEnd?.("assistant-ended-call")
          })

          vapiRef.current.on("volume-level", (level: number) => {
            setVolumeLevel(level)
          })

          vapiRef.current.on("error", (error: any) => {
            console.error("Vapi Error:", error)
            options.onError?.(error)
          })
        }
      } catch (err) {
        setConfigError("Failed to load Vapi configuration")
      }
    }
    fetchConfig()

    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop()
      }
    }
  }, [])

  const start = useCallback(async () => {
    if (vapiRef.current) {
      vapiRef.current.start("assistant-id-placeholder", {
        variableValues,
      })
    }
  }, [variableValues])

  const stop = useCallback(() => {
    if (vapiRef.current) {
      vapiRef.current.stop()
    }
  }, [])

  return { isCalling, volumeLevel, start, stop, isConfigured, configError, vapiRef }
}
*/
