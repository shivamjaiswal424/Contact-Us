import React from 'react'

const Navigation = () => {
  return (
    <nav style={{display:"flex", alignItems:"center", justifyContent: "space-between",padding:"1px 80px",height:"48px"}}>
        <div className="logo">
            <img src="/images/logo.png" alt="Contactus logo" style={{height:100,width:100,opacity:.4}}/>
        </div>
        <ul style={{display:'flex', gap:"24px",fontWeight:500, listStyle:'none'}}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  );
};

export default Navigation;