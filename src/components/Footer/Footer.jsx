import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='p-5'>
      <FaFacebook className='px-2' size={60}/>
      <FaWhatsapp className='px-2' size={60}/>
      <FaInstagram className='px-2' size={60}/>
    </div>
  )
}

export default Footer