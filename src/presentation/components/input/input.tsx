import React, { memo } from 'react'
import Styles from './input-styles.scss'

interface Props
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string
  errorMessage?: string
}

const Input: React.FC<Props> = ({ label, errorMessage, ...props }) => {
  return (
    <div className={Styles.container}>
      {!!label && <h5>{label}</h5>}
      <input {...props} />
      {!!errorMessage && <h5 className={Styles.errorMessage}>{errorMessage}</h5>}
    </div>
  )
}

export default memo(Input)
