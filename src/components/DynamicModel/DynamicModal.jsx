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
    width:"50%",
    overflow:"scroll",
    height: "80vh",
    padding:"2em"
  },
};
export default function DynamicModal({isOpen,closeMOdel,children}) {
    const [isModalOpen,setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
    // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
     closeMOdel(false)
  }
  return (
    <Modal
        isOpen={isOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div>
        {
           children
        }

        </div>
       
      </Modal>
  )
}
