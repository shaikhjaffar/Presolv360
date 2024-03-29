import React from 'react'
import Logo from '../assets/Images/logo.png';
import ScrollToTop from '../components/ScrollToTop';
import Grate from  '../assets/Images/gtP_WRK.png'
export default function Footer() {
  return (
    <>
    <ScrollToTop/>
    <div className='footer_wrap'>
     {/* <img src={Logo} alt='logo'/> */}
     <div className='footerLink_wrap'>
         <ul>
            <li>   <a> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.25 11.4C11.4686 11.4 10.7191 11.0839 10.1666 10.5213C9.614 9.95871 9.30357 9.19565 9.30357 8.4C9.30357 7.60435 9.614 6.84129 10.1666 6.27868C10.7191 5.71607 11.4686 5.4 12.25 5.4C13.0314 5.4 13.7809 5.71607 14.3334 6.27868C14.886 6.84129 15.1964 7.60435 15.1964 8.4C15.1964 8.79397 15.1202 9.18407 14.9721 9.54805C14.8241 9.91203 14.607 10.2427 14.3334 10.5213C14.0598 10.7999 13.735 11.0209 13.3775 11.1716C13.0201 11.3224 12.6369 11.4 12.25 11.4ZM12.25 0C10.062 0 7.96354 0.884998 6.41637 2.4603C4.86919 4.03561 4 6.17218 4 8.4C4 14.7 12.25 24 12.25 24C12.25 24 20.5 14.7 20.5 8.4C20.5 6.17218 19.6308 4.03561 18.0836 2.4603C16.5365 0.884998 14.438 0 12.25 0Z" fill="#005186"/>
</svg> Presolv360, Esperanca Building, Colaba, Mumbai - 400001</a> 
            </li>
            <li><a href='tel:+918447725708'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.72333 10.5883C7.40333 13.89 10.11 16.585 13.4117 18.2767L15.9783 15.71C16.2933 15.395 16.76 15.29 17.1683 15.43C18.475 15.8617 19.8867 16.095 21.3333 16.095C21.975 16.095 22.5 16.62 22.5 17.2617V21.3333C22.5 21.975 21.975 22.5 21.3333 22.5C10.3783 22.5 1.5 13.6217 1.5 2.66667C1.5 2.025 2.025 1.5 2.66667 1.5H6.75C7.39167 1.5 7.91667 2.025 7.91667 2.66667C7.91667 4.125 8.15 5.525 8.58167 6.83167C8.71 7.24 8.61667 7.695 8.29 8.02167L5.72333 10.5883Z" fill="#005186"/>
</svg>+91 8447725708 </a></li>
            <li><a href='mailto:info@presolv360.com'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.6 19.8C3.0225 19.8 2.52795 19.5942 2.11635 19.1826C1.70475 18.771 1.4993 18.2768 1.5 17.7V5.1C1.5 4.5225 1.7058 4.02795 2.1174 3.61635C2.529 3.20475 3.0232 2.9993 3.6 3H20.4C20.9775 3 21.472 3.2058 21.8836 3.6174C22.2952 4.029 22.5007 4.5232 22.5 5.1V17.7C22.5 18.2775 22.2942 18.772 21.8826 19.1836C21.471 19.5952 20.9768 19.8007 20.4 19.8H3.6ZM12 12.45L20.4 7.2V5.1L12 10.35L3.6 5.1V7.2L12 12.45Z" fill="#005186"/>
</svg>info@presolv360.com</a></li>
<img src={Grate} alt='Great place to work' style={{width:"100%",paddingBottom:"2em"}}/>
         </ul>
       
         <div  className='important_link'>
            <h3>Important Links</h3>
            <ul>
                <li> <a>FAQs</a></li>
                <li><a>Rules, Code & Fees</a></li>
                <li><a>Terms & Conditions</a></li>
                <li><a>Privacy Policy</a></li>
                <li><a>Cookie Policy</a></li>
                <li><a>Standards</a></li>
            </ul>
         </div>
     </div>
      <div className='footer_dis_main_wrap'>
        <div>
        <h3>Disclaimer</h3>
        <p>Presolv360 is not a law firm and does not provide legal advice. The use of any materials or services is not a substitute for legal advice. Only a legal practitioner can provide legal advice. A legal practitioner should be consulted for any legal advice or matter. No Attorney-Client relationship is created by use of these materials or services</p>
        </div>
      
        
       
        <div className='social_icon_main_wrap'>
        <h3>Stay Connected</h3>
        <div className='social_icon_wrap'>
        <a target='_blank' href='https://www.linkedin.com/company/presolv360/'><svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M28.4444 0C29.3874 0 30.2918 0.374602 30.9586 1.0414C31.6254 1.70819 32 2.61256 32 3.55556V28.4444C32 29.3874 31.6254 30.2918 30.9586 30.9586C30.2918 31.6254 29.3874 32 28.4444 32H3.55556C2.61256 32 1.70819 31.6254 1.0414 30.9586C0.374602 30.2918 0 29.3874 0 28.4444V3.55556C0 2.61256 0.374602 1.70819 1.0414 1.0414C1.70819 0.374602 2.61256 0 3.55556 0H28.4444ZM27.5556 27.5556V18.1333C27.5556 16.5963 26.945 15.1221 25.8581 14.0353C24.7712 12.9484 23.2971 12.3378 21.76 12.3378C20.2489 12.3378 18.4889 13.2622 17.6356 14.6489V12.6756H12.6756V27.5556H17.6356V18.7911C17.6356 17.4222 18.7378 16.3022 20.1067 16.3022C20.7668 16.3022 21.3998 16.5644 21.8666 17.0312C22.3333 17.498 22.5956 18.131 22.5956 18.7911V27.5556H27.5556ZM6.89778 9.88445C7.68989 9.88445 8.44956 9.56978 9.00967 9.00967C9.56978 8.44956 9.88445 7.68989 9.88445 6.89778C9.88445 5.24444 8.55111 3.89333 6.89778 3.89333C6.10095 3.89333 5.33676 4.20987 4.77331 4.77331C4.20987 5.33676 3.89333 6.10095 3.89333 6.89778C3.89333 8.55111 5.24444 9.88445 6.89778 9.88445ZM9.36889 27.5556V12.6756H4.44444V27.5556H9.36889Z" fill="#005186"/>
</svg></a>
<a target='_blank' href='https://youtube.com/@presolv3603?feature=shared'>
<svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M29.3139 3.22397C28.9405 1.91691 28.0069 0.983286 26.6998 0.609838C22.7786 0.23639 18.8574 -0.137058 14.9362 0.049666C11.015 0.049666 7.09378 0.23639 3.17258 0.609838C2.05224 0.983286 0.931894 2.10363 0.558446 3.22397C-0.186149 9.05097 -0.186149 14.949 0.558446 20.776C0.931894 22.0831 1.86551 23.0167 3.17258 23.3902C7.09378 23.7636 11.015 24.1371 14.9362 23.9503C18.8574 23.9503 22.7786 23.7636 26.6998 23.3902C28.0069 23.0167 28.9405 22.0831 29.3139 20.776C30.0585 14.949 30.0585 9.05097 29.3139 3.22397ZM11.2017 17.6017V6.39828L20.9114 12L11.2017 17.6017Z" fill="#005186"/>
</svg>
</a>
<a target='_blank' href='https://twitter.com/presolv360?lang=en'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.42857 0C1.5375 0 0 1.5375 0 3.42857V20.5714C0 22.4625 1.5375 24 3.42857 24H20.5714C22.4625 24 24 22.4625 24 20.5714V3.42857C24 1.5375 22.4625 0 20.5714 0H3.42857ZM19.3446 4.5L13.7839 10.8536L20.325 19.5H15.2036L11.1964 14.2554L6.60536 19.5H4.06071L10.0071 12.7018L3.73393 4.5H8.98393L12.6107 9.29464L16.8 4.5H19.3446ZM17.3196 17.9786L8.21786 5.94107H6.70179L15.9054 17.9786H17.3143H17.3196Z" fill="#005186"/>
</svg></a>

        </div>
   
      </div>

      </div>

    </div>
    {
      window.innerWidth > 600 ?  <span className='footer_strip'>Presolv360<span style={{fontSize:"15px",padding:".2em"}}>&#169;</span>2017 - 2024. All rights reserved</span> : <span className='footer_strip'>Presolv360&#169; 2017 - 2024<br></br>  All rights reserved</span>
    }
    
     </>
  )
}
