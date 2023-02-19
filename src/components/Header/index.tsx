// import { useState } from 'react'
// import Modal from 'react-modal'
import logoImg from '../../assets/total.svg'

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void,
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {

  

  return (
    <Container>
        <Content>            
            <h1><img src={logoImg} alt="MoneyManagement" />Money Management</h1>
            <button type="button" onClick={onOpenNewTransactionModal}>
                New transaction
            </button>            
        </Content>
    </Container>
  )
}
