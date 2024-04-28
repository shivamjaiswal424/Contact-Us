import React, { useState } from 'react';
import But from './but';
import { MdMessage, MdEmail } from 'react-icons/md';
import { FaPhoneSquare } from "react-icons/fa";

const ContactForm = () => {
    const [name,setName]=useState("you name");
    const[email,setEmail]=useState("@any@gmail.com")
    const [text,setText]=useState("your text");
    
    const onSubmit=(event)=>{
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
        console.log("name",event.target[0].value);
        console.log("email",event.target[1].value);
        console.log("text",event.target[2].value);
    };
  return (
    <section style={{ display: "flex", maxWidth: "1000px", margin: "0 auto", marginTop: "40px", alignItems: "flex-start" }}>
        <div style={{ display: "flex", flexDirection: "column", flex: "1", gap: "24px" }}>
            <div style={{ display: "flex", gap: "32px" }}>
                <But  text="VIA SUPPORT CHAT" icon={<MdMessage style={{ fontSize: "24px" }} />} isOutline={true} />
                <But  text="VIA CALL" icon={<FaPhoneSquare style={{ fontSize: "24px" }} />} isOutline={true} />
            </div>
            <But text="VIA EMAIL FORM" icon={<MdEmail style={{ fontSize: "24px" }} />} isOutline={false} />
            <form onSubmit={onSubmit}
             style={{ display: "flex", gap: "20px", paddingBottom: "20px", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "4px", position: "relative" }}>
                    <label htmlFor="name" style={{ position: "absolute", top: "-12px", left: "10px", padding: "0 10px", backgroundColor: "white", fontSize: "14px" }}>Name</label>
                    <input type="text" name="name" style={{ height: "40px", padding: "0 8px" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "100%", position: "relative" }}>
                    <label htmlFor="email" style={{ position: "absolute", top: "-12px", left: "10px", padding: "0 10px", backgroundColor: "white", fontSize: "14px" }}>Email</label>
                    <input type="email" name="email" style={{ height: "40px", padding: "0 8px" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "4px", position: "relative" }}>
                    <label htmlFor="text" style={{ position: "absolute", top: "-12px", left: "10px", padding: "0 10px", backgroundColor: "white", fontSize: "14px" }}>Text</label>
                    <textarea name="text" style={{ height: "120px", padding: "0 8px" }} rows="8" />
                </div>
                <div style={{ display: "flex", justifyContent: "end" }}>
                    <button type="submit" style={{ height: "32px", color: "white", backgroundColor: "black", borderRadius: "5px" }}>Submit</button>
                </div>
                <div>{name+" , "+email+" , "+text}</div>
            </form>
        </div>
        <div style={{ flex: "1" }}>
            <img src="/images/contact.jpg" alt="contact image" style={{ width: "100%", height: "450px" }} />
        </div>
    </section>
  );
}

export default ContactForm;
