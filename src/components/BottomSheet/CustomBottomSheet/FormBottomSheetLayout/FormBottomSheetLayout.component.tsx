import React, { ReactNode } from 'react'
import { ButtonsContainer, FormBottomSheetContainer, FormContainer, TitleMessage } from './FormBottomSheetLayout.styled'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props {
  title?: string
  renderForm: () => ReactNode
  renderButtons: () => ReactNode
}

const FormBottomSheetLayout = ({ renderButtons, renderForm, title }: Props) => {
  const { bottom: bottomSafeAreaInset } = useSafeAreaInsets()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <FormBottomSheetContainer bottomInset={bottomSafeAreaInset}>
        {title && <TitleMessage>{title}</TitleMessage>}
        <View style={{ height: 1 }} />
        <FormContainer>{renderForm()}</FormContainer>
        <ButtonsContainer>{renderButtons()}</ButtonsContainer>
      </FormBottomSheetContainer>
    </TouchableWithoutFeedback>
  )
}

export default FormBottomSheetLayout
