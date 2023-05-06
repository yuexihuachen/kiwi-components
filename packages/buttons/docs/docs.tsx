import React from 'react'
import {useTheme as useEmotionTheme} from '@emotion/react'

type DocButton = {
  isInverse?: boolean
}

export function DocsButtonGrid({
  isInverse = false,
  style,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & DocButton) {
  const tokens: any = useEmotionTheme()
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))',
        gridGap: '1.2rem',
        justifyItems: 'center',
        alignItems: 'center',
        padding: '1.2rem',
        backgroundColor: isInverse && tokens.sysColorPrimaryMain,
        ...style,
      }}
      {...rest}
    />
  )
}
