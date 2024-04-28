import { useState } from 'react'
import Navigation from "./components/Navigation";
import './App.css'
import ContactHeader from './components/contactHeader';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div>
      <Navigation/>
      <main style={{display: "flex", height: 'calc(100vh - 72px)', flexDirection: "column",
        justifyContent:"end"}}>
        <ContactHeader/>
        <ContactForm/>
      </main>
    </div>
  );
}

export default App;
