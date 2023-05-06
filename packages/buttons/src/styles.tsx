import {css, keyframes} from '@emotion/react'
import {math} from 'polished'

export default function styles(tokens: any) {

  // Base Styles for button
  const base = css`
    label: button_base;
    position: relative;
    border-radius: 1000px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    min-width: 6rem;
    text-align: center;
    text-decoration: none;
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 400;
    background-color: rgb(0, 48, 135);
    padding: 0.625rem 1.875rem;
    background-color: rgb(0, 48, 135);
    &:hover,
    &:active,
    &:visited {
      color: green;
    }

    &:hover {
      text-decoration: none;
      background-color: red;
      border-color: red;
    }






  `

  return {
    base

  }
}
