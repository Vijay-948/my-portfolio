import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../Styles/Contact.css';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        validationSchema: Yup.object({
            name: Yup.string().required('name Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            message: Yup.string().required('Required')
        }),
        // onSubmit: async (values, {setSubmitting, resetForm}) => {
        //     try{
        //         await
        //     }
        // }
    })

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_crmsmh4', 'template_yyqupcs', form.current, {
        publicKey: 'auwB11NMgJ3j1csot',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return(
        <>
        <section className="contact-page">
            <div className="container">
                <div className="contact-div">
                    <div className="contact-div__text">
                        <h2>Need additional Information?</h2>
                        
                        <a href='tel:+1234567890'>
                            <CallIcon className='icon'/> +91 6305075608
                        </a>
                        <a href="mailto:kvijayreddy88@gmail.com">
                            <EmailIcon className='icon'/> kvijayreddy88@gmail.com
                        </a>
                        <a href="https://carrental.com/hyderabad">
                            <LocationOnIcon className='icon'/> Hyderbad, Hitech City
                        </a>
                    </div>

                    <div className="contact-div__form">
                        <form ref={form} onSubmit={sendEmail}>
                            <label>
                                Full Name <b>*</b>
                            </label>
                            <input type="text" placeholder="Vijay Reddy" name='from_name'></input>

                            <label>
                                Email <b>*</b>
                            </label>
                            <input type="email" placeholder="example@gmail.com" name='from_email'></input>

                            <label>
                                Your Message <b>*</b>
                            </label>
                            <textarea placeholder="Write Something Here..." name='message'></textarea>

                            <button type="submit">
                                <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
          </section>
        </>
    )

}

export default Contact;