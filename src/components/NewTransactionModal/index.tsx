import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { useState } from "react"
import { BsArrowDownCircle, BsArrowUpCircle} from "react-icons/bs"
import { RxCrossCircled } from "react-icons/rx"



interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen,onRequestClose}:NewTransactionModalProps) {

 const [type, setType] = useState('deposit')


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
      <Container>
        <h2>Register Transaction</h2>

        <input 
          placeholder="Title" 
        />
        <input 
          type="number"
          placeholder="Value" 
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
          >
            <BsArrowDownCircle size={30} style={{display: "flex", color: "green"}}/>
            <span>Income</span>
          </RadioBox>
          <RadioBox 
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'deposit'}
          >
            <BsArrowUpCircle style={{display: "flex",color: "red"}} size={30}/>
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer> 

        <input 
          placeholder="Category"  
        />

        <button type="submit">Register</button>
      </Container>

     
    </Modal>
  );
}
