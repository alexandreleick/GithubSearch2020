import styled from 'styled-components/native'

export const BadgeContainer = styled.View<{ color: string }>`
  height: 30px;
  margin-top: 10px;
  font-size: 13px;
  line-height: 1px;
  text-align: center;
  border-radius: 15px;
  background-color: ${({ color }) => color};
`
