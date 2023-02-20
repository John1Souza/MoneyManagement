import React, { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from "./styles";
// import { useContext } from "react"



export function Summary() {

  const {transactions} = useContext(TransactionsContext);
  console.log(transactions);
  

  return (
    <Container>

      {/* Forma antiga */}
      {/* <TransactionsContext.Consumer>
        {
          (data) => {
            console.log(data)

            return <p>Ok</p>
            
          }
        }        
      </TransactionsContext.Consumer> */}

      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="outcome" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$ 1.500,00</strong>
      </div>
    </Container>
  )
}
