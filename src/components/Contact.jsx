import React, { useState } from "react"
import axios from "axios"

export default function Contact() {

  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formPhone, setFormPhone] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [formError, setFormError] = useState(false)
  const [postSuccess, setPostSuccess] = useState(false)
  const [postFail, setPostFail] = useState(false)

  async function sendEmail(e) {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage || !formPhone) {
      setFormError(true);
    }
    else {
      setFormError(false);
      const emailObject = {
        'from_name': formName,
        'reply_email': formEmail,
        'phone_number': formPhone,
        'message': formMessage
      }
      const res = await axios.post('/minecraftspeedrun/email', emailObject)
      if(res.data == "success") {
        setPostSuccess(true)
      }
      else if(res.data == "error") {
        setPostFail(true)
      }
      setFormName('')
      setFormEmail('')
      setFormPhone('')
      setFormMessage('')
    }  
  }

  return (
    <div className="h-[100vh] flex justify-center flex-col mb-28" >
      <h1 className="mx-auto text-[#6f3a44] text-[70px]" id="contact-section">contact</h1>
      <form className="mx-auto w-[50%] flex flex-col mt-6" onSubmit={sendEmail}>
        <input className="mx-auto rounded-xl bg-slate-200 mt-5 p-3 focus:outline-0 w-[90%] lg:w-5/6" type="text" value={formName} placeholder="Name" onChange={(e) => setFormName(e.target.value)}/>
        <input className="mx-auto rounded-xl bg-slate-200 mt-5 p-3 focus:outline-0 w-[90%] lg:w-5/6" type="text" value={formEmail} placeholder="Email" onChange={(e) => setFormEmail(e.target.value)}/>
        <input className="mx-auto rounded-xl bg-slate-200 mt-5 p-3 focus:outline-0 w-[90%] lg:w-5/6" type="text" value={formPhone} placeholder="Phone Number" onChange={(e) => setFormPhone(e.target.value)}/>
        <textarea className="mx-auto rounded-xl bg-slate-200 mt-5 p-3 focus:outline-0 w-[90%] lg:w-5/6 h-48" id="message-box" value={formMessage} placeholder="Message" onChange={(e) => setFormMessage(e.target.value)}/>
        <button className={`rounded-xl px-3 ${formError ? "bg-red-500" : "bg-[#6f3a44]"} border-2 border-black text-white hover:text-[#6f3a44] hover:bg-white mt-5 w-1/4 h-14 lg:h-10 mx-auto`}>Send Email</button>
        {formError && <div className="text-red-500 mt-5 mx-auto">please enter all information</div>}
        {postSuccess && <div className="text-green-500 mt-5 mx-auto">email sent</div>}
        {postFail && <div className="text-red-500 mt-5 mx-auto">error sending email</div>}
      </form>
    </div>
  )
}