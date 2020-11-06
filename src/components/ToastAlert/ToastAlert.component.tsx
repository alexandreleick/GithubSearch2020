import React from 'react'
import { ToastNotification } from 'react-native-toast-notification'

type ToastAlertProps = {
  message: string
  type: 'red' | 'blue' | 'orange'
}

const ToastAlert: React.FC<ToastAlertProps> = (props: ToastAlertProps) => {
  const { message, type } = props

  return (
    <ToastNotification
      textStyle={{ color: 'white' }}
      style={{ backgroundColor: type }}
      text={message}
      duration={2000}
    />
  )
}

export default ToastAlert
