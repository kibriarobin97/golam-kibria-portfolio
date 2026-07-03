import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_27t8c0p', 'template_eh53o5w', form.current, {
                publicKey: 'XgPFNKtWp11C6E0YA',
            })
            .then(
                () => {
                    toast.success('Email send successfully!')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="my-20 max-w-7xl mx-auto">
            <h3 id='contact' className="text-3xl lg:text-4xl font-bold text-center text-white mb-10">Contact</h3>
            <section className="py-6">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-3xl font-bold">Let's talk!</h1>
                        <p className="pt-2 pb-4">Fill in the form to Send Email</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>+880 1871793020</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>kibriarobin97@gmail.com</span>
                            </p>
                            <a
                                href="https://wa.me/8801871793020"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center w-fit gap-2 mr-2 sm:mr-6 px-4 py-2 rounded-md bg-green-500 text-gray-900 font-semibold hover:bg-green-600 transition-colors"
                            >
                                <FaWhatsapp className="w-5 h-5" />
                                <span>Chat on WhatsApp</span>
                            </a>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <label className="block">
                            <span className="mb-1 font-semibold">Name</span>
                            <input type="text" placeholder="Enter your name" name='user_name' className="block w-full rounded-md p-2 shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800" />
                        </label>
                        <label className="block">
                            <span className="mb-1 font-semibold">Email</span>
                            <input type="email" placeholder="Enter your email" name='user_email' className="block w-full rounded-md p-2 shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800" />
                        </label>
                        <label className="block">
                            <span className="mb-1 font-semibold">Message</span>
                            <textarea rows="3" name='message' className="block w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"></textarea>
                        </label>
                        <input
                            type="submit"
                            value="Send Email"
                            className="btn btn-secondary self-center px-8 text-lg"
                        />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;