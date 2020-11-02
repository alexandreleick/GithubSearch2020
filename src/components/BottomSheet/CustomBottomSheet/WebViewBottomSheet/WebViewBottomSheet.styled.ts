import styled from 'styled-components/native'

export const Container = styled.View<{ bottom?: number }>`
  background-color: #ffffff;
  height: 100%;
  margin-top: 30px;
  margin-bottom: ${({ bottom }) => (bottom ? bottom : 20)}px;
`
