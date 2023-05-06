import {css, keyframes} from '@emotion/react'
import {math} from 'polished'

export default function styles(tokens: any) {

  const base = css`
    label: card_base;
    padding: 20px;
    position: relative;
    text-align: initial;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 8px;
  `
  // header styles
  const header = css`
    label: header;
    margin-bottom: 20px;
    display: table;
  `
  const title = css`
    label: title;
    width: 100%;
    display: table-cell;
    margin: initial;
    padding: 20px 0;
    text-transform: none;
    vertical-align: middle;
  `
  // content styles
  const content = css`
    label: content;
    margin-top: 0.9375rem;
    margin-bottom: 0.9375rem;
  `
  // footer styles
  const footer = css`
    label: footer;
    margin-top: 12px;

    button,
    a {
      margin: initial;
    }

    button:not(:last-child),
    a:not(:last-child) {
      margin-right: 8px;
    }

    [dir='rtl'] & {
      button:not(:last-child),
      a:not(:last-child) {
        margin-right: initial;
        margin-left: 8px;
      }
    }
  `

  
  return {
    base,
    header,
    title,
    content,
    footer
  }
}
