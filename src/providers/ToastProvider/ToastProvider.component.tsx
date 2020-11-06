import React, { createContext, useState, useEffect, useRef, useCallback, ReactNode } from 'react'

type ToastParams = {
  message: string
  type: 'danger' | 'info' | 'warning' | null
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
    type: null,
    visible: false,
  }
  const [toast, setToast] = useState<ToastParams>(initialToast)
  const timeout = useRef()

  const show = useCallback((args: ToastParams) => {
    setToast({ ...initialToast, ...args, visible: true })
  }, [])

  const hide = useCallback(() => {
    setToast({ ...toast, visible: false })
  }, [toast])

  useEffect(() => {
    if (toast.visible) {
      timeout.current = setTimeout(hide, 1500)
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
