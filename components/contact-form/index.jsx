'use client';

import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, errors } = useForm({
        mode: "onBlur",
    });
    return (
        <form
            className="contact-form-wrapper"
            action="https://getform.io/f/a17a2715-d7ee-4ac4-8fcb-12f1eed43b2c"
            method="POST"
            data-aos-duration="1200"
        >
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="subject"
                            placeholder="Subject (optional)"
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group mb-0">
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Write your message here"
                        ></textarea>
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <div className="form-group mb-0">
                        <button
                            className="btn btn-theme btn-block"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
