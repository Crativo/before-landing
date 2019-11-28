export const breakpoints = {
  tablet: 768,
  tabletWide: 1024,
  desktop: 1200,
  desktopWide: 1800,
  breakNavigation: 1040,
} as any

export const mq = Object.keys(breakpoints).reduce((accumulator: any, label) => {
  const emSize = breakpoints[label] / 16

  accumulator[label] = `@media (min-width: ${emSize}em)`

  return accumulator
}, {})
