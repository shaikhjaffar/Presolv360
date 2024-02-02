import React from 'react'
import Modal from 'react-modal';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { Bussiness } from '../service/StoreData';

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
export default function EnquiryModal() {

    const [modalIsOpen, setIsOpen] = React.useState(false);
     const [formData,setFormData] = React.useState({})
     const [number,setNumber] = React.useState()
    function openModal() {
      setIsOpen(true);
    }
  

  
    function closeModal() {
      setIsOpen(false);
    }
  
    
  // handlePhoneChange = (status, phoneNumber, country) => {
  //   console.log({ phoneNumber });
  //   this.setState({ phoneNumber });
  // };

    const handleTelInput = (status, phoneNumber, country) => {
       setNumber(`+${{country}.country.dialCode}${ phoneNumber }`)
      //  console.log(`+${{country}.country.dialCode}${ phoneNumber }`)
    };


    function submitDetail () {
      console.log({...formData,'number':number})
      let newData = {...formData,'phone':number}
    Bussiness(newData)
    .then(response => console.log(response.status))
    .catch((e)=>{
      console.log({e})
    })

    }
  return (
    <div>
           <button onClick={openModal} className='blue_btn'style={{minHeight:"42px"}}>
     Business Enquiry
        </button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
          <svg width="18" onClick={closeModal} style={{cursor:"pointer"}} height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.82397 0.631951L8.99997 6.80795L15.144 0.663951C15.2797 0.519499 15.4432 0.403943 15.6246 0.324211C15.8061 0.244479 16.0018 0.202214 16.2 0.199951C16.6243 0.199951 17.0313 0.368522 17.3313 0.66858C17.6314 0.968638 17.8 1.3756 17.8 1.79995C17.8037 1.99611 17.7673 2.19097 17.693 2.37256C17.6187 2.55415 17.5081 2.71865 17.368 2.85595L11.144 8.99995L17.368 15.224C17.6317 15.4819 17.7863 15.8313 17.8 16.2C17.8 16.6243 17.6314 17.0313 17.3313 17.3313C17.0313 17.6314 16.6243 17.8 16.2 17.8C15.9961 17.8084 15.7926 17.7744 15.6026 17.7C15.4125 17.6256 15.24 17.5126 15.096 17.368L8.99997 11.192L2.83997 17.352C2.70478 17.4916 2.54327 17.6031 2.36477 17.68C2.18627 17.7569 1.99431 17.7976 1.79997 17.8C1.37562 17.8 0.968655 17.6314 0.668596 17.3313C0.368538 17.0313 0.199967 16.6243 0.199967 16.2C0.196237 16.0038 0.232632 15.8089 0.306919 15.6273C0.381206 15.4458 0.491819 15.2813 0.631967 15.144L6.85597 8.99995L0.631967 2.77595C0.368263 2.51797 0.213631 2.16861 0.199967 1.79995C0.199967 1.3756 0.368538 0.968638 0.668596 0.66858C0.968655 0.368522 1.37562 0.199951 1.79997 0.199951C2.18397 0.204751 2.55197 0.359951 2.82397 0.631951Z" fill="black"/>
</svg> 
        <div className='modal_main_wrap'>
      
       <h2 className='modal_heading'>The time to try ODR is now.</h2>
       <p className='modal_des'>To know why and how, contact our team for more details.</p>
     
         <input type="text" placeholder='Full Name*' onChange={(e)=>{
            setFormData({...formData,'name': e.target.value})
         }} />
         <input type="text" placeholder='Organization Name*'  onChange={(e)=>{
            setFormData({...formData,'orgname': e.target.value}) }} />
         <IntlTelInput
      preferredCountries={['in']}
      separateDialCode={true}
      autoPlaceholder={false}
      showSelectedDialCode= {true}
      placeholder="Mobile Number"
      style={{width:"100%"}}
      onPhoneNumberChange={handleTelInput}
  />
         <input type="email" placeholder='Work Email ID*'  onChange={(e)=>{ setFormData({...formData,'email': e.target.value}) }} />
      <button className='orange_btn' onClick={submitDetail} style={{maxWidth:"180px"}}>Reach out to us</button>
        </div>

    </Modal>
  </div>
  )
}
