import React, { createContext, ReactNode, useCallback, useEffect, useRef, useState } from 'react'

type ToastParams = {
  message: string
  type: 'danger' | 'info' | 'warning' | 'success'
  visible: boolean
}

type ToastProviderProps = {
  children: ReactNode
}

type ToastProviderContextProps = {
  show: (params: ToastParams) => void
  hide: () => void
  toast: ToastParams
}

export const ToastContext = createContext<Partial<ToastProviderContextProps>>({})

export const ToastProvider: React.FC<ToastProviderProps> = (props: ToastProviderProps) => {
  const { children } = props
  const initialToast: ToastParams = {
    message: '',
    type: 'info',
    visible: false,
  }
  const [toast, setToast] = useState<ToastParams>(initialToast)
  const timeout = useRef()

  const show: (params: ToastParams) => void = useCallback((args: ToastParams) => {
    setToast({ ...initialToast, ...args, visible: true })
  }, [])

  const hide: () => void = useCallback(() => {
    setToast({ ...toast, visible: false })
  }, [toast])

  useEffect(() => {
    if (toast.visible) {
      timeout.current = setTimeout(hide, 2500)
      return () => {
        if (timeout.current) {
          clearTimeout(timeout.current)
        }
      }
    }
  }, [hide, toast])

  return (
    <ToastContext.Provider
      value={{
        hide,
        show,
        toast,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}
