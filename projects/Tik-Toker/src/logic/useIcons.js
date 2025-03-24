import { useState } from "react"


export const useIcons = (initialValue=false) => {
  const [isIcons, setIsIcons] = useState(initialValue)

  const  openIcons = () => setIsIcons(true)

  const closeIcons = () => setIsIcons(false)

  return [isIcons, openIcons, closeIcons]
}
