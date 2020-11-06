import styled from 'styled-components/native'

export const BadgeComponent = styled.View<{ color: string }>`
  align-self: center;
  min-width: 14px;
  height: 14px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  padding-horizontal: 0;
  padding-vertical: 0;
`
