import React, { memo } from 'react'
import styles from './login-header-styles.scss'
import Logo from '../logo/logo'

const LoginHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para Programadores</h1>
    </header>
  )
}

export default memo(LoginHeader)
