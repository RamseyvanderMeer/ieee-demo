/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import axios from "axios";
import contact from "../styles/Contact.module.scss";
interface HomeProps {
  setCurrent: (current: number) => void;
}
export default function Contact({setCurrent} : HomeProps) {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [sender, setSender] = useState("");

  const SendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post("/api/email", {
      message,
      subject,
      sender,
    });
    if (response.status === 200) {
      setMessage("");
      setSubject("");
      setSender("");
    }
      alert("Message Sent");
      const nextURL = "/";
      const nextTitle = "Home Page";
      const nextState = { additionalInformation: "Updated the URL with JS" };

      // This will create a new entry in the browser's history, without reloading
      window.history.pushState(nextState, nextTitle, nextURL);
      setCurrent(0);
  };

  const ClearForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setSubject("");
    setSender("");
  };

//       position: absolute;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   width: 100vw;
//   color: white;
//   z-index: 1;

  return (
    <div className={contact.container}>
      <form onSubmit={SendMail} onReset={ClearForm} className={contact.form}>
        <h1 className={contact.title}>Contact</h1>
        <label className={contact.label} htmlFor="sender">
          Contact Email:
        </label>
        <input
          type="email"
          required
          value={sender}
          className={contact.input}
          onChange={(e) => setSender(e.target.value)}
        ></input>
        <label className={contact.label} htmlFor="subject">
          Subject:
        </label>
        <input
          type="subject"
          required
          value={subject}
          className={contact.input}
          onChange={(e) => setSubject(e.target.value)}
        ></input>
        <label className={contact.label} htmlFor="message">
          Message:
        </label>
        <textarea
          required
          value={message}
          className={contact.input}
          rows={4}
          cols={20}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className={contact.buttonContainer}>
          <button className={contact.clear} type="reset">
            Clear
          </button>
          <button className={contact.submit} type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
