import React, { memo } from 'react'
import Styles from './button-styles.scss'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const Button: React.FC<Props> = ({ children, ...props }) => (
  <button {...props} className={Styles.button}>
    {children}
  </button>
)

export default memo(Button)
