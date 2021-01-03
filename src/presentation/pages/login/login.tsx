import React from 'react'
import Styles from './login-styles.scss'

import Input from '@/presentation/components/input'
import Button from '@/presentation/components/button'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <form className={Styles.form} action="">
        <h1>Acesse</h1>
        <Input label="Usuário" value="Teste" />
        <Input label="Senha" value="" />
        <Button type="submit">Entrar</Button>
        <h4>
          Não possui conta? <a href="#">Cadastre-se</a>
        </h4>
      </form>
    </div>
  )
}

export default Login
