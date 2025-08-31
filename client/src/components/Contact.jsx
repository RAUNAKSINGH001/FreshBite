import React from "react";
import { useState, useEffect } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1694021408920-922ff450c525?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-center rounded-2xl ">
      <div className=" bg-black/30 backdrop-blur-sm rounded-2xl px-25 pt-2 pb-2 flex gap-5">
        <div className="flex flex-col px-10 py-10 gap-5 w-full">
          <p className="text-3xl font-bold text-amber-600">Contact Us</p>
          <p>We’d love to hear from you!</p>
          <p className="">
            At Freshbite, your satisfaction is our top priority. Whether you
            have a question about your order, want to share feedback, or just
            feel like saying hello, we’re always here to help.
          </p>
          <div className="flex gap-10">
            <span>+91-9123496152</span>
            <span>raunakr386@gmail.com</span>
          </div>

          <div>hello</div>
        </div>

        <form className="px-10 py-5 flex-col flex items-center gap-4 w-200 bg-white/5 backdrop-blur-sm rounded-2xl">
          <div className="flex-col flex gap-1 w-full">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(ele) => setName(ele.target.value)}
              placeholder="Enter your name"
              className="rounded-2xl bg-black/40 px-5 py-2 "
            />
          </div>
          <div className="flex-col flex gap-1 w-full">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(ele) => setEmail(ele.target.value)}
              placeholder="Enter your email"
              className="rounded-2xl bg-black/40 px-5 py-2 w-full"
            />
          </div>
          <div className="flex-col flex gap-1 w-full">
            <label htmlFor="">Subject</label>
            <input
              type="text"
              id="suject"
              value={subject}
              onChange={(ele) => setSubject(ele.target.value)}
              placeholder="Subject"
              className="rounded-2xl bg-black/40 px-5 py-2 w-full"
            />
          </div>
          <div className="flex-col flex gap-1 w-full">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              placeholder="Type your message here"
              onChange={(ele) => setMessage(ele.target.value)}
              className="rounded-2xl bg-black/40 px-5 py-2 h-60 w-full "
            />
          </div>
          <button
            className="px-5 py-2 rounded-2xl bg-amber-600 "
            onClick={(ele) => ele.preventDefault()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
