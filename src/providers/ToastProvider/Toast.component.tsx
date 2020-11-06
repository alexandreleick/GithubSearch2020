import React, { useContext, useEffect, useRef } from 'react'
import { ToastContext } from './ToastProvider.component'
import { Animated, Easing, Text, TouchableOpacity } from 'react-native'
import { styles } from './Toast.styled'
import { useTheme } from '@ui-kitten/components'

export const Toast = () => {
  const { toast, hide } = useContext(ToastContext)
  const translateYRef = useRef(new Animated.Value(-100))
  const theme = useTheme()

  useEffect(() => {
    if (toast.visible) {
      Animated.timing(translateYRef.current, {
        duration: 300,
        easing: Easing.ease,
        toValue: 100,
        useNativeDriver: true,
      }).start()
    } else {
      Animated.timing(translateYRef.current, {
        duration: 450,
        easing: Easing.ease,
        toValue: -100,
        useNativeDriver: true,
      }).start()
    }
  }, [toast])

  const backgroundColor: string = theme['color-' + toast.type + '-500']

  return (
    <Animated.View
      style={[{ ...styles.toast, backgroundColor }, { transform: [{ translateY: translateYRef.current }] }]}
    >
      <TouchableOpacity onPress={hide} style={styles.content}>
        <Text style={styles.toastMessage}> {toast.message}</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default Toast
