import { createMuiTheme } from '@material-ui/core/styles'
import { darken } from '@material-ui/core/styles/colorManipulator'
import { blue, lightBlue, red, indigo, deepOrange, grey } from '@material-ui/core/colors'

import appBarBg from '../img/appbar.jpg'

const backgroundColor = '#fafafa'

const primaryColor = indigo[900]
const secondaryColor = blue[900]
const accentColor = red.A700
const contrastColor = '#fff'

const primaryHoverColor = darken(primaryColor, 0.15)
const secondaryHoverColor = darken(secondaryColor, 0.15)
const accentHoverColor = darken(accentColor, 0.15)
const contrastLightColor = darken(contrastColor, 0.15)

const infoColor = grey[500]
const errorColor = red.A700
const successColor = lightBlue.A700
const warningColor = deepOrange.A700

const fontFamilyHeadline = 'Georgia, Arial'
const fontFamilyBody = 'Arial, "Helvetica Neue", Helvetica, sans-serif'

const appBarHeight = 64
const contentPadding = 16

const theme = createMuiTheme({
  overrides: {},
  palette: {
    primary: {
      contrastText: contrastColor,
      dark: primaryColor,
      main: primaryColor,
    },
    secondary: {
      contrastText: contrastColor,
      dark: secondaryColor,
      main: secondaryColor,
    },
    error: {
      contrastText: contrastColor,
      main: errorColor,
    },

    tonalOffset: 0.2,

    type: 'light',
  },
})

theme.typography.fontFamily = fontFamilyBody
theme.typography.button.fontFamily = fontFamilyHeadline

const appTheme = {
  ...theme,
  app: {
    appPaper: {
      padding: 0,
      margin: 0,
      backgroundColor,
    },
    appBar: {
      height: appBarHeight,
      background: primaryColor,
      backgroundImage: `linear-gradient(${secondaryColor}, ${primaryColor}20), url(${appBarBg})`,
      backgroundSize: 'cover',
      color: contrastColor,
    },
    toolBar: {
      height: appBarHeight,
    },
    toolBarLink: {
      color: contrastColor,
      textDecoration: 'none',
    },
    padding: {
      size: contentPadding,
      scrollbar: contentPadding,
    },
    palette: {
      background: backgroundColor,
      accent: accentColor,
      accentHover: accentHoverColor,
      contrast: contrastColor,
      contrastLight: contrastLightColor,
      info: infoColor,
      error: errorColor,
      success: successColor,
      warning: warningColor,
      primary: primaryColor,
      primaryHover: primaryHoverColor,
      secondary: secondaryColor,
      secondaryHover: secondaryHoverColor,
    },
    text: {
      bodyFamily: fontFamilyBody,
    },
  },
} as IAppTheme

console.debug('material-ui theme', appTheme)

export default appTheme
