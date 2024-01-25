import React from 'react'
import Modal from 'react-modal';
const customStyles = {
    content: {
      top: '60%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:'40vw',
      minWidth:"320px",
      borderRadius:'8px',
      boxShadow:'4px 4px 24px 8px rgba(0, 0, 0, 0.25)'
    },
  };
export default function LoginDropdown() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(!modalIsOpen);
    }
  

  
    function closeModal() {
      setIsOpen(false);
    }
  return (
    <>
    <button className="orange_btn" onClick={openModal}  >
    Login / Register
  </button>
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    shouldFocusAfterRender={false}
    className="login_drp_dwn_wrap"
  >
        <li><a class="dropdown-item"  href="https://mediation.presolv360.com/login">User for Mediation @ Presolv360</a></li>
        <li><a class="dropdown-item"  href="https://mediation.presolv360.com/login">Mediator @ Presolv360</a></li>
        <li><a class="dropdown-item"  href="https://presolv360.com/login">User for Arbitration @ Presolv360</a></li>
        <li><a class="dropdown-item"  href="https://presolv360.com/login">Arbitrator @Presolv360</a></li>
        <li><a class="dropdown-item"  href="https://securitiesodr.presolv360.com/login">User @ Securities ODR with Presolv360</a></li>
        <li><a class="dropdown-item"  href="https://securitiesodr.presolv360.com/login">Conciliator @ Securities ODR with Presolv360</a></li>
        <li><a class="dropdown-item" href="https://securitiesodr.presolv360.com/arbitration/login">Arbitrator @ Securities ODR with Presolv360</a></li>
   
    </Modal>
    </>
  )
}
