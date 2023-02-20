import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { FormEvent, useState, useContext } from "react"
import { BsArrowDownCircle, BsArrowUpCircle} from "react-icons/bs"
import { RxCrossCircled } from "react-icons/rx"
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";





interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen,onRequestClose}:NewTransactionModalProps) {

  const { createTransaction } = useContext(TransactionsContext)

 const [title, setTitle] = useState('')
 const [amount, setAmount] = useState(0)
 const [category, setCategory] = useState('')
 const [type, setType] = useState('deposit')

 function handleCreateNewTransaction(event : FormEvent){
  event.preventDefault();

  createTransaction ({
    title,
    amount,
    category,
    type,
  })
 }


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
      type="button" 
      onClick={onRequestClose} 
      className="react-modal-close"
      >
        <RxCrossCircled className="svg" style={{width: "2.375rem", height: "2.375rem"}}/>
        {/* <img src={closeImg} alt="close modal" /> */}
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register Transaction</h2>

        <input 
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}  
        />
        <input 
          type="number"
          placeholder="Value"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))} 
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <BsArrowDownCircle size={30} style={{display: "flex", color: "green"}}/>
            <span>Income</span>
          </RadioBox>
          <RadioBox 
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <BsArrowUpCircle style={{display: "flex",color: "red"}} size={30}/>
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer> 

        <input 
          placeholder="Category"
          value={category}
          onChange={event => setCategory(event.target.value)}  
        />

        <button type="submit">Register</button>
      </Container>

     
    </Modal>
  );
}
