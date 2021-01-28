import React, { useState } from 'react';
  
const rules = {
  "soon": "anoon",
  "are": "art",
  "leave": "dispatch",
  "kill": "dispatch",
  "does": "doth",
  "before": "ere",
  "listen": "hark",
  "here": "hither",
  "has": "hath",
  "never": "ne'er",
  "beg": "pray",
  "ask": "pray",
  "you": "thou",
  "your": "thy",
}
  
export const App = () => {
  const [ english, setEnglish ] = useState("")
  const [ shakespearean, setShakespearean ] = useState("")
  
  return (
    <div class="App">
      <div class="container">
        <h1>Shakespearean Translater</h1>
        
        <input 
          type="text" 
          placeholder="English"  
          value={english} 
          onChange={(e) => {
            const value = e.target.value;
            
            let text = value.toLowerCase();
            Object.entries(rules).forEach(([key, value]) => {
              text = text.replace(key, value)
            });
            
            setEnglish(value)
            setShakespearean(text)
          }} 
        />
        
        <input 
          type="text" 
          placeholder="Shakespearen"  
          value={shakespearean} 
          onChange={(e) => {
            const value = e.target.value;
            
            let text = value.toLowerCase();
            Object.entries(rules).forEach(([key, value]) => {
              text = text.replace(value, key)
            });
            
            setEnglish(text)
            setShakespearean(value)
          }}
        />
        
        <h5>
          Made with <span role="img" aria-label="love">❤️</span> by <a href="https://codyq.me/" target="_blank" rel="noopener noreferrer">Cody</a>.
        </h5>
      </div>
    </div>
  )
};
