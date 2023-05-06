import React, {HTMLAttributes, useMemo} from 'react'

import {jsx, useTheme as useEmotionTheme} from '@emotion/react'

import styles from './styles'

  
  type CardSectionProps = HTMLAttributes<HTMLDivElement>

const Card = ({
    as = 'div',
    children,
    className
  }: any) => {
    const tokens = useEmotionTheme()
    const _styles = useMemo(() => styles(tokens), [tokens])
  
    const Component: any = as
  
    return (
      <Component
        css={[_styles.base]}
        className={className}
      >
        {children}
      </Component>
    )
  }
  
  const Header = ({className, children}: CardSectionProps) => {
    const tokens = useEmotionTheme()
    const _styles = useMemo(() => styles(tokens), [tokens])

    const Component: any = 'header'
    
    return (
      <Component css={_styles.header} className={className}>
        {children}
      </Component>
    )
  }
  
  const Content = ({className, children}:CardSectionProps) => {
    const tokens = useEmotionTheme()
    const _styles = useMemo(() => styles(tokens), [tokens])
    const Component: any = 'div'

    return (
      <Component css={_styles.content} className={className}>
        {children}
      </Component>
    )
  }
  
  const Footer = ({className, children, ...rest}: CardSectionProps) => {
    const tokens = useEmotionTheme()
    const _styles = useMemo(() => styles(tokens), [tokens])
    const Component: any = 'footer'
    return (
      <Component css={_styles.footer} className={className} {...rest}>
        {children}
      </Component>
    )
  }
  
  Card.Header = Header
  Card.Content = Content
  Card.Footer = Footer
  
  export {Card}
  