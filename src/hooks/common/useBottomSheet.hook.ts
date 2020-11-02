import { useState } from 'react'

const useBottomSheet: Function = () => {
  const [isVisible, setVisible] = useState(false)
  const [bottomSheetParams, setBottomSheetParams] = useState<any>(null)

  const toggleBottomSheet = () => {
    setVisible(!isVisible)
    if (isVisible) {
      setBottomSheetParams(null)
    }
  }

  return {
    isVisible,
    toggleBottomSheet,
    bottomSheetParams,
    setBottomSheetParams,
  }
}

export default useBottomSheet
