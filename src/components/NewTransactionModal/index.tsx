import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from "../../assets/x-white.svg"
import { RxCrossCircled } from "react-icons/rx"



interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen,onRequestClose}:NewTransactionModalProps) {
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
        <input 
          placeholder="Category"  
        />

        <button type="submit">Register</button>
      </Container>

     
    </Modal>
  );
}
