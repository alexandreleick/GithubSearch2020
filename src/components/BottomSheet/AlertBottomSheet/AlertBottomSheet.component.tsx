import CustomBottomSheet from '../CustomBottomSheet'
import React from 'react'
import { AlertContainer, AlertMessage, ButtonsContainer } from './AlertBottomSheet.styled'
import Button from '../../Button'
import { Color } from '../../Button/Button.styled'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface AlertBottomSheetAction {
  action?: () => void
  icon?: IconProp
  label: string
  color: Color
}

export interface AlertBottomSheetParams {
  message?: string
  actions: AlertBottomSheetAction[]
}

export interface AlertBottomSheetProps {
  isAlertVisible: boolean
  toggleAlert: () => void
  params: AlertBottomSheetParams
  onSuccess?: () => void
  loading?: boolean
}

const AlertBottomSheet = (props: AlertBottomSheetProps) => {
  const { isAlertVisible, toggleAlert, params, onSuccess, loading } = props
  const { bottom: bottomSafeAreaInset } = useSafeAreaInsets()

  return (
    <CustomBottomSheet isVisible={isAlertVisible} toggleBottom={toggleAlert}>
      <AlertContainer bottomInset={bottomSafeAreaInset}>
        {params && params.message && <AlertMessage>{params.message}</AlertMessage>}
        {params && params.actions && (
          <ButtonsContainer>
            {params.actions.map(({ action, color, label, icon }, index) => (
              <Button
                key={index}
                backgroundColor={color}
                textColor="white"
                icon={icon}
                label={label}
                style={{ marginBottom: 15 }}
                onPress={() => {
                  if (action) action()
                  if (onSuccess) onSuccess()
                  toggleAlert()
                }}
                loading={action ? loading : false}
              />
            ))}
          </ButtonsContainer>
        )}
      </AlertContainer>
    </CustomBottomSheet>
  )
}

export default AlertBottomSheet
