import React,{useState,useEffect} from 'react';
import {Cardlist} from './component/card-list/Card-list-component'
import './App.css';

function App() {

  const [cards ,setCards] = useState([]);
  const [term,setTerm] = useState('')
  useEffect(() => {
    
       fetch('https://jsonplaceholder.typicode.com/users')
       .then((res) => res.json())
       .then((data) => setCards(data))    
  }, [term])
  
   const searchfilter = cards.filter(card => card.name.toLowerCase());
  
  return (
     <div className='App'>
            
       <Cardlist cards={searchfilter} />

    </div>
  );
}

export default App;
