import { useEffect, useState } from "react"

const checkOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    const checkOnlineStatus = (()=> setIsOnline(navigator.onLine))
    window.addEventListener("onLine", checkOnlineStatus)
    window.addEventListener("offLine", checkOnlineStatus)

    return(() => {
        window.removeEventListener("online", checkOnlineStatus)
        window.removeEventListener("offline", checkOnlineStatus)
    })
  }, [])

  return isOnline
}


export default checkOnline

