"use client";
import Image from "next/image";
import IconContent from "../../../data/Blogcontent/Icon";
import React, { FormEvent, useEffect, useState } from "react";
const Message = require("../../../data/Blogcontent/Content");

const initialFormData = {
  first: "",
  email: "",
  website: "",
};
interface ErrorMessage {
  first: string;
  email: string;
  website: string;

}
const errorMessage: ErrorMessage = {
  first: "",
  email: "",
  website: "",
};
function Form() {
  const [formData, setFormData] = useState(initialFormData);
  const [errorMessages, setErrorMessages] = useState(errorMessage);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (emailData : any) => {
    return emailData.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setErrorMessages(validate(formData));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessages(validate(formData));
  };

  const validate = (formValues: any) => {
    let error: ErrorMessage = {
      first: "",
      email: "",
      website: "",
    };
    if (!formValues.first) {
      error.first = "Firstname is required";
    } else {
      error.first = "";
    }
    
    if (!formValues.website) {
      error.website = "Website is required";
    } else {
      error.website = "";
    }
    
    if (!formValues.email) {
        error.email = "email is required";
    } else if( !validateEmail(formValues.email) ){
        error.email = "Please insert valid email is required";
    }else{
      error.email = "";
    }

    if( ( error.first == "") && ( error.email == "") && ( error.website == "") ){
        setSuccess(true)
    }
    return error;
  };

  return (
    <div className="contact-sec" >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>{Message.FORM_TITLE}</h2>
                        <div className="">
                            { success?(
                                <>
                                    <p>{Message.FORM_SUCESS_MESSAGE}</p>
                                </>
                            ) : (
                                <form
                                onSubmit={handleSubmit}
                                className=""
                            >
                                <input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={formData.first || ''}
                                    type="text"
                                    name="first"
                                    id="first"
                                    className=""
                                    placeholder="Name"
                                />
                                <span className="text-red-500">{errorMessages.first}</span>
                                <input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={formData.email || '' }
                                    type="email"
                                    name="email"
                                    id="email"
                                    className=""
                                    placeholder="Email"
                                />
                                <span className="text-red-500">{errorMessages.email}</span>
                                <input
                                    type="text"
                                    name="tel"
                                    id="tel"
                                    className=""
                                    placeholder="Phone (Optional)"
                                />
                                <input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={formData.website || ''}
                                    type="text"
                                    name="website"
                                    id="website"
                                    className=""
                                    placeholder="Website (If exists)"
                                />
                                <span className="text-red-500">{errorMessages.website}</span>
                                <textarea name="message" id="message" placeholder="Message"></textarea>
                                <button className="bg-yellow-600 p-2 m-2 rounded-sm text-white outline-2 outline-yellow-800">
                                {Message.FORM_SUBMIT_BTN}
                                </button>
                                </form>
                            ) }
                        </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Form;