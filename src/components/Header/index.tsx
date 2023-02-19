import logoImg from '../../assets/total.svg'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
        <Content>            
            <h1><img src={logoImg} alt="MoneyManagement" />Money Management</h1>
            <button type="button">
                New transaction
            </button>
        </Content>
    </Container>
  )
}
