// App theme
declare interface IAppTheme extends Theme {
  app: IAnyObject
  palette: Palette
}

// Generic style rules
declare interface IAnyStyleRules {
  [key: string]: StyleRules
}
