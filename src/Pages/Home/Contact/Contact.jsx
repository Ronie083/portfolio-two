import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

    const formRef = useRef();

    const handleEmailSend = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rozl0ob', 'template_gcacgr7', formRef.current, 'FHDcr9np0w5NqtIGG')
            .then((result) => {
                console.log(result.text);
                toast("Your message successfully sent!");
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }
    return (
        <div className="pt-20 px-5" id="contact">
            <h1 className="text-4xl text-center">Contact Me</h1>
            <hr />
            <form className="max-w-5xl mx-auto" ref={formRef} onSubmit={handleEmailSend}>
                <h1 className="text-xl mb-2 mt-5">What&apos;s your name?</h1>
                <input type="name" name="name" placeholder="name*" className="border-b-2 bg-transparent p-3 mb-5 container border-black" />

                <h1 className="text-xl mb-2 mt-5">What&apos;s your email?</h1>
                <input type="email" name="email" placeholder="email*" className="border-b-2  bg-transparent p-3 mb-5 container border-black" />

                <h1 className="text-xl mb-2 mt-5">What&apos;s the message about?</h1>
                <input type="text" name="subject" placeholder="subject*" className="border-b-2  bg-transparent p-3 mb-5 container border-black" />

                <h1 className="text-xl mb-2 mt-5">What&apos;s the name of your organization?</h1>
                <input type="text" name="organization" placeholder="name of organization" className="border-b-2 bg-transparent p-3 mb-5 container border-black" />

                <h1 className="text-xl mb-2 mt-5">Your message</h1>
                <textarea type="text" name="message" placeholder="message*" className="border-b-2 p-3 mb-5 container border-black" />

                <div className="divider max-w-3xl flex mx-auto" />
                
                <div className="text-center ">
                <input type="submit" className="btn btn-outline bg-white border-0 border-b-4 border-[#388087]" value="Send Message">
                </input>
                </div>
                <ToastContainer />
            </form>
        </div>
    );
};

export default Contact;