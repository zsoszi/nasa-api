import React, {useEffect, useState} from 'react';
import Nasa from './api'
import './App.css';

function App() {
  const[nasa, setNasa] = useState([]);


  useEffect(  () =>{ 
    getNasa();
  }, []);

  const getNasa = async () => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=NIGACatit3gE0fd1XprmFfUBGho3Uzp2Hq7JQLIG`);
    const data = await response.json();
    setNasa(data);
    console.log(data);
  }


  return (
    <div className="App">
    <div className="Nasa">
      <Nasa 
      date={nasa.date}
      description={nasa.explanation}
      picture={nasa.hdurl}
      title={nasa.title}
      />
    </div>
      
    </div>
  );
}

export default App;