import React, {useEffect, useState} from 'react';

import './App.css';
import News from "./components/News";



function App() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
 const [selected, setSelected] = useState("india");

  const handleChange = event => {
    setSelected(event.target.value);
  };

  useEffect(()=>{
    const  fetchData = async () => {
     let res = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm ? searchTerm : selected}&apiKey=cfa0dfb58faf417cb9ac5c2a9eeaabee`)
     const json = await res.json()
     setNews(json) ;
     
    }
    fetchData().catch(console.error)
     },[searchTerm, selected])

  return (
    <div className="App">
      <div style={{ fontFamily: 'sans-serif', fontSize:"30px", height: 50}}>
        Daily News Updates
      </div>
    <div style={{display:"flex" , justifyContent:"space-evenly" , position:'relative', marginTop:"5px", marginLeft:"5px"}}>
    <span className='search'>
     <input onChange={(e)=> setSearchTerm(e.target.value)} placeholder="search"/>
      </span> 
      <span>
      <select value={selected} onChange={handleChange}>
        <option value="india">Business</option>
        <option value="apple">Technology</option>
        <option value="banana">Politics</option>
        <option value="kiwi">Economy</option>
      </select>
  </span>
    </div>
      <div className='news-main'>
         <News news={news}/>
      </div>
    </div>
  );
}

export default App;
