import React from 'react'
import { BadgeComponent } from './Badge.styled'

type BadgeProps = {
  color: string
}

const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
  const { color, ...attributes } = props

  return <BadgeComponent {...attributes} color={color} />
}
export default Badge
