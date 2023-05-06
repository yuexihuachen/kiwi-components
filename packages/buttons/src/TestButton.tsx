import React, {
  ButtonHTMLAttributes,
  ReactElement,
  forwardRef,
  ElementType,
  AnchorHTMLAttributes,
  useMemo,
} from 'react'

import { css, jsx, useTheme as useEmotionTheme } from "@emotion/react";
import styles from './styles'

export type ButtonProps = {
  as?: ElementType
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button({
    as,
    className,
    children,
  }, ref) {
    const Component = as || 'button'
    const tokens = useEmotionTheme()
    const buttonStyles = useMemo(() => styles({}), [])
    console.log(tokens)
    let cssVal = [buttonStyles.base]

    return (
      <Component
        css={cssVal}
        className={className}
        ref={ref}
      >
        {children}
      </Component>
    )
  })

export { Button }
