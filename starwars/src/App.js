import React, {useState, useEffect} from 'react';
import axios from "axios";
import CharacterCard from "./components/CharacterCard.js";
// import './App.css';
import './App.scss';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [personObjs, setPersonObjs] = useState([])
  
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect( () => {
    axios.get("https://henry-mock-swapi.herokuapp.com/api/")
    .then(res => {
      const data = res.data.results;
      setPersonObjs(data);
    })
    .catch(error => console.log("API error:", error))
  },[])

  console.log("SHEEPLE", personObjs) // explain when exactly the two console logs happen (first [], then array of objs)

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="people-container">
        {personObjs.map(data => 
          (<CharacterCard 
          key={data.url}
          name={data.name}
          hairColor={data.hair_color}
          eyeColor={data.eye_color}
          height={data.height}
          skinColor={data.skin_color}
          gender={data.gender}
          homeworld={data.homeworld}
          species={data.species}/>)
        )}
      </div>
    </div>
  );
}

export default App;
