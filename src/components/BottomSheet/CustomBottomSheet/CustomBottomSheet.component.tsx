import React, { MutableRefObject, ReactNode, useRef } from 'react'
import {
  KeyboardAvoidingView,
  NativeScrollEvent,
  NativeSyntheticEvent,
  PanResponder,
  ScrollView,
  useWindowDimensions,
} from 'react-native'
import { ModalContainer, ModalContent } from './CustomBottomSheet.styled'
import BottomSheet from 'react-native-simple-bottom-sheet'

export interface CustomBottomSheetProps {
  isVisible: boolean
  toggleBottom: () => void
  children: ReactNode
}

const CustomBottomSheet = ({ isVisible, toggleBottom, children }: CustomBottomSheetProps) => {
  const panelRef: MutableRefObject<BottomSheet> = useRef(null)
  const { height } = useWindowDimensions()
  const togglePanel = () => panelRef.current.togglePanel()
  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: (e, gestureState) => {
        e.stopPropagation()
        return gestureState.dy > 0
      },
      onPanResponderRelease: (e, gestureState) => {
        e.stopPropagation()
        return gestureState.y0 < 638 && togglePanel()
      },
    }),
  ).current

  return (
    <ModalContainer isVisible={isVisible} backdropOpacity={0.4}>
      <ModalContent {...panResponder.panHandlers}>
        <BottomSheet
          ref={(ref: MutableRefObject<BottomSheet>) => (panelRef.current = ref)}
          isOpen={isVisible}
          sliderMinHeight={0}
          sliderMaxHeight={height - 50}
          onClose={toggleBottom}
        >
          {(onScrollEndDrag: (event: NativeSyntheticEvent<NativeScrollEvent>) => void) => (
            <KeyboardAvoidingView behavior={'padding'}>
              <ScrollView onScrollEndDrag={onScrollEndDrag}>{children}</ScrollView>
            </KeyboardAvoidingView>
          )}
        </BottomSheet>
      </ModalContent>
    </ModalContainer>
  )
}

export default CustomBottomSheet
