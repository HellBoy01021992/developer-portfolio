import { useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL

const KEEP_ALIVE_INTERVAL = 10 * 60 * 1000 // 10 minutes

export const useApiKeepAlive = () => {
  useEffect(() => {
    let intervalId: number | undefined

    const pingHealth = async () => {
      // Don't ping while the browser tab is hidden.
      if (document.visibilityState !== 'visible') {
        return
      }

      try {
        await fetch(`${API_URL}/health`, {
          method: 'GET',
          cache: 'no-store',
        })
      } catch {
        // Health checks are best-effort.
        // Never let a failed health check affect the portfolio UI.
      }
    }

    const startKeepAlive = () => {
      if (intervalId !== undefined) {
        window.clearInterval(intervalId)
      }

      // Ping immediately when the tab becomes active.
      pingHealth()

      intervalId = window.setInterval(
        pingHealth,
        KEEP_ALIVE_INTERVAL,
      )
    }

    const stopKeepAlive = () => {
      if (intervalId !== undefined) {
        window.clearInterval(intervalId)
        intervalId = undefined
      }
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        startKeepAlive()
      } else {
        stopKeepAlive()
      }
    }

    // Start immediately if the page is visible.
    if (document.visibilityState === 'visible') {
      startKeepAlive()
    }

    document.addEventListener(
      'visibilitychange',
      handleVisibilityChange,
    )

    return () => {
      stopKeepAlive()

      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange,
      )
    }
  }, [])
}