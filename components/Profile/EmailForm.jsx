import { useState } from "react";

import { AiFillCloseCircle } from "react-icons/ai";
const EmailForm = ({ user, onClose }) => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSendEmail = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${user.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex items-center justify-center fixed top-0 left-0 bg-[#00000099] right-0 bottom-0">
           <AiFillCloseCircle 
        onClick={onClose}
        className="absolute z-20 top-0 right-0 text-white text-4xl cursor-pointer"
        />
      <form className=" animate-jump-in flex flex-col bg-white justify-center items-center gap-6 w-64 h-[18rem] rounded-2xl">

        <h1 className="font-bold ">
          Message to {user.first} {user.last}
        </h1>
        <label>
          Subject:
          <input
            className="border-2 border-gray-400 rounded-2xl"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
        <label>
          Text:
          <textarea 
            className="border-2 border-gray-400 "
           value={body} onChange={(e) => setBody(e.target.value)} />
        </label>
        <button
          onClick={handleSendEmail}
          className=" bg-blue-400 text-white p-2 rounded-2xl"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
