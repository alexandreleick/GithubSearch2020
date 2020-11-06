import React from 'react'
import { BadgeContainer } from './PillBadge.styled'
import { Text } from 'react-native'

export interface PillBadgeProps {
  color: string
  text: string
}

const PillBadge: React.FC<PillBadgeProps> = (props: PillBadgeProps) => {
  const { color, text } = props

  return (
    <BadgeContainer color={color}>
      <Text style={{ alignSelf: 'center', color: 'white', paddingVertical: 7 }}>{text}</Text>
    </BadgeContainer>
  )
}

export default PillBadge
