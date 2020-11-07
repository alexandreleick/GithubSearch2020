import { useState } from 'react'

type UseBottomSheetType = () => {
  isVisible: boolean
  toggleBottomSheet: () => void
  bottomSheetParams: any
  setBottomSheetParams: (param: any) => void
}

const useBottomSheet: UseBottomSheetType = () => {
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
