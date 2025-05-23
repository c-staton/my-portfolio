import React, { useState } from "react";

const ContactForm = () => {
    const initialState = {
        name: "",
        email: "",
        message: "",
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    return (
        <form
            className="contact__form"
            name="contact"
            method="post"
            data-netlify="true"
        >
            <input type="hidden" name="form-name" value="contact" />
            <input
                className="contact__form__input"
                placeholder="Name"
                value={formData.name}
                name="name"
                type="text"
                onChange={handleChange}
                required
            />
            <input
                className="contact__form__input middle-input"
                placeholder="Email"
                value={formData.email}
                name="email"
                type="text"
                onChange={handleChange}
                required
            />
            <textarea
                className="contact__form__input contact__textarea"
                placeholder="Message"
                rows="10"
                value={formData.message}
                name="message"
                type="text"
                onChange={handleChange}
                required
            ></textarea>
            <div className='contact__btn-wrap'>
                <button className="contact__btn" type="submit">
                    Work With Me
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
