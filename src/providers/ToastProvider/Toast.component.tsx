import React, { useContext, useEffect, useRef } from 'react'
import { ToastContext } from './ToastProvider.component'
import { Text, Animated, Easing, TouchableOpacity } from 'react-native'
import { styles } from './Toast.styled'

export const Toast = () => {
  const { toast, hide } = useContext(ToastContext)
  const translateYRef = useRef(new Animated.Value(-100))

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

  const backgroundColor: string = (() => {
    switch (toast.type) {
      case 'danger':
        return 'red'
      case 'success':
        return 'green'
      case 'info':
        return 'primary'
      case 'warning':
        return 'orange'
    }
  })()

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
