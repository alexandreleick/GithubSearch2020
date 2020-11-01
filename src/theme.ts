import { configureFonts, DefaultTheme } from 'react-native-paper'

const fontConfig: any = {
  default: {
    regular: {
      fontFamily: 'Quicksand-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Quicksand-Bold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Quicksand-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Quicksand-Light',
      fontWeight: 'normal',
    },
  },
}

fontConfig.ios = fontConfig.default
fontConfig.android = fontConfig.default

export const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#173E64',
    accent: '#14D7E6',
    background: '#e7eef5',
    grey: '#B5B9B2',
    text: '#0A0A0A',
    muted: '#F0F1F3',
    info: '#14D7E6',
    success: '#7DBE31',
    error: '#FC0021',
    black: '#000',
    white: '#fff',
    yellow: '#F9D510',
    orange: '#F99F10',
    aqua: '#28B9B2',
    green: '#07BB1C',
    purple: '#3761D3',
  },
  button: {
    blue: '#14D7E6',
    red: '#E63036',
  },
  checkbox: {},
  header: {
    colors: ['#173E64', '#2B5175', '#173E64'],
  },
  bottomNav: {
    background: '#ffffff',
    height: 80,
    shadowHeight: 10,
    fabHeight: 56,
  },
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48],
}
