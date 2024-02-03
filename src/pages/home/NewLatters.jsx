
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewLatters = () => {
  const showToast = (type, message) => {
    if (type === 'success') {
      toast.success(message);
    } else if (type === 'error') {
      toast.error(message);
    }
  };

  const form = useRef();
  const [email, setEmail] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    const emailInput = form.current.elements.email;

    // Check if the email is invalid
    if (!emailInput.value || !/\S+@\S+\.\S+/.test(emailInput.value)) {
      showToast('error', 'Please enter a valid email address.');
      return;
    }

    emailjs
      .sendForm('service_4owep6b', 'template_xe9gtoa', form.current, '3Bj1HwTlI8v-Ny6Uj')
      .then((result) => {
        console.log(result.text);
        showToast('success', 'Email sent successfully!');
        // Clear the input field after successful submission
        setEmail('');
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        showToast('error', 'An error occurred while sending the email.');
      });
  };

  return (
    <div className='bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-4 md:py-16 mt-8'>
      <h3 className='title mb-8'>Follow products and discounts on Instagram</h3>
      <div className='flex flex-wrap items-center gap-4 justify-center mb-20'>
        <Link to={'/'}><img src="/src/assets/img/images/instagram/img1.png" alt="" /></Link>
        <Link to={'/'}><img src="/src/assets/img/images/instagram/img2.png" alt="" /></Link>
        <Link to={'/'}><img src="/src/assets/img/images/instagram/img3.png" alt="" /></Link>
        <Link to={'/'}><img src="/src/assets/img/images/instagram/img4.png" alt="" /></Link>
        <Link to={'/'}><img src="/src/assets/img/images/instagram/img5.png" alt="" /></Link>
        <Link to={'/'}><img src="/src/assets/img/images/instagram/img6.png" alt="" /></Link>

      </div>

      <div>
        <h3 className='title mb-8'>Or subscribe to the newsletter</h3>
        <form ref={form} onSubmit={sendEmail} noValidate className='md:w-1/2 md:flex md:items-center mx-auto text-center'>
          <input
            type="email"
            name='email'
            id='email'
            placeholder='Email address...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4'
          />
          <input
            type="submit"
            value='SUBMIT'
            className='bg-transparent outline-none border-b-2 border-black cursor-pointer px-5 mb-5 placeholder:text-black/50 h-8 font-mono'
          />
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default NewLatters;

