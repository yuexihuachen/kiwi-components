import React, {FunctionComponent, PropsWithChildren} from 'react'
import {ThemeProvider as EmotionThemeProvider} from '@emotion/react'
import {KIWI_DEFAULT_THEME} from './themeContext'

const StoryWrapper: FunctionComponent<PropsWithChildren<{theme?: any}>> = ({
  theme = KIWI_DEFAULT_THEME,
  children,
}) => (
  <EmotionThemeProvider theme={theme}>
    <div
      className="docs-story-wrapper"
      style={{backgroundColor: theme.sysColorBackgroundSurface}}
    >
      {children}
    </div>
  </EmotionThemeProvider>
)

export default StoryWrapper
