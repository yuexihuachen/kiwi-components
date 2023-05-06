import React, {
    ButtonHTMLAttributes,
    ReactElement,
    forwardRef,
    ElementType,
    AnchorHTMLAttributes,
    useMemo,
  } from 'react'

import { css,jsx, useTheme as useEmotionTheme } from "@emotion/react";

  import styles from './styles'

// export const TestButton = () => {
//   const buttonStyle = css`
//     color: #fff;
//     background-color: blue;
//     border-radius: 3em;
//   `;

//   return <button css={buttonStyle}>Test</button>;
// };

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

export {Button}
