import { useState } from "react"


export const useModal = (initialValue=false) => {
  const [isOpen, setIsOpen] = useState(initialValue)

  const openModal = () => setIsOpen(true)

  const closeMOdal = () => setIsOpen(false)

  return [isOpen, openModal, closeMOdal]
}
