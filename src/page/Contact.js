import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <section className='contact'>
        <div className='content'>
            <h1>GET TOUCH WITH US</h1>
            <p>Please contact us with any questions regarding your agricultural problems that needs to solve using the new technological solutions. We will respond to all your enquires, that send to us via below email address and contact us form, within 5 working days.</p>
        </div>
        <div className='container'>
            <div className='contactinfo'>
                <div className='box'>
                <br/>
                    <h3 className='text' >Address</h3>
                    <p className='text2'>Elzian Agro (Pvt) Ltd <br/> Kurunegala <br/> Sri Lanka <br/>60000.</p>
                </div>
                <br/>
                <div className='box'>
                   
                    <h3 className='text'>Phone</h3>
                    <p className='text2'>011-12121212</p>
                </div>
                <br/>
                <div className='box'>
                  
                    <h3 className='text'>Email</h3>
                    <p className='text2'>contact@elzian.com</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
