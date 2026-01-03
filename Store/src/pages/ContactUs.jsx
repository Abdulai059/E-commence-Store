import React, { useState } from "react";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Button from "../ui/Button";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <section className="relative flex justify-center z-10 overflow-hidden bg-white py-10 px-4 dark:bg-dark sm:py-16 lg:py-[120px]">
                <div className="container lg:pt-20">
                    <div className="-mx-4 flex flex-wrap lg:justify-between gap-y-8">
                        <div className=" px-4 lg:w-1/2 xl:w-6/12">
                            <div className="mb-8 max-w-[570px] px-6  lg:mb-0">
                                <span className="mb-3 block text-sm sm:text-base font-semibold text-primary">
                                    Contact Us
                                </span>
                                <h2 className="mb-6 text-xl md:text-2xl font-semibold uppercase text-dark">
                                    GET IN TOUCH WITH US
                                </h2>
                                <p className="mb-6 sm:mb-9 text-sm sm:text-base leading-relaxed text-body-color dark:text-dark-6">
                                    Have questions about our latest gadgets, warranties, or orders? Our team of electronics specialists is ready to help you find the right products and ensure a smooth shopping experience. Reach out to us today!
                                </p>
                                <div className="mb-6 sm:mb-8 flex w-full max-w-[370px]">
                                    <div className="mr-4 sm:mr-6 flex h-[50px] w-full max-w-[50px] items-center justify-center overflow-hidden rounded-3xl  bg-primary/5 text-primary sm:h-[60px] sm:max-w-[60px] lg:h-[70px] lg:max-w-[70px]">
                                        <FaHome className="text-blue-600" size={23} />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-base sm:text-lg font-semibold ">
                                            Our Location
                                        </h4>
                                        <p className="text-sm sm:text-base text-body-color dark:text-dark-6">
                                            99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-6 sm:mb-8 flex w-full max-w-[370px]">
                                    <div className="mr-4 sm:mr-6 flex h-[50px] w-full max-w-[50px] items-center justify-center overflow-hidden  rounded-3xl bg-primary/5 text-primary sm:h-[60px] sm:max-w-[60px] lg:h-[70px] lg:max-w-[70px]">
                                        <FaPhoneAlt className="text-green-600" size={23} />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-base sm:text-lg font-semibold ">
                                            Phone Number
                                        </h4>
                                        <p className="text-sm sm:text-base text-body-color dark:text-dark-6">
                                            (+62)81 414 257 9980
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-6 sm:mb-8 flex w-full max-w-[370px]">
                                    <div className="mr-4 sm:mr-6 flex h-[50px] w-full max-w-[50px] items-center justify-center overflow-hidden rounded-3xl  bg-primary/5 text-primary sm:h-[60px] sm:max-w-[60px] lg:h-[70px] lg:max-w-[70px]">
                                        <FaEnvelope className="text-red-500" size={23} />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-base sm:text-lg font-semibold">
                                            Email Address
                                        </h4>
                                        <p className="text-sm sm:text-base text-body-color dark:text-dark-6">
                                            info@yourdomain.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="relative rounded-lg bg-white p-6 shadow-lg dark:bg-dark-2 sm:p-8 lg:p-12">
                                <div>
                                    <ContactInputBox
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <ContactInputBox
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <ContactInputBox
                                        type="tel"
                                        name="phone"
                                        placeholder="Your Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    <ContactTextArea
                                        row="6"
                                        placeholder="Your Message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                    <div>
                                        <Button
                                            onClick={handleSubmit}
                                            className="w-full rounded border border-primary bg-primary p-3 text-sm sm:text-base text-white transition hover:bg-opacity-90"
                                        >
                                            Send Message
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;

function ContactTextArea({ row, placeholder, name, value, onChange }) {
    return (
        <>
            <div className="mb-4 sm:mb-6">
                <textarea
                    rows={row}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full resize-none rounded border border-stroke px-3 sm:px-[14px] py-2 sm:py-3 text-sm sm:text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                />
            </div>
        </>
    );
};

function ContactInputBox({ type, placeholder, name, value, onChange }) {
    return (
        <>
            <div className="mb-4 sm:mb-6">
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full rounded border border-stroke px-3 sm:px-[14px] py-2 sm:py-3 text-sm sm:text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                />
            </div>
        </>
    );
};