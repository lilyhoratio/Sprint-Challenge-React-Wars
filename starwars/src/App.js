import React, {useState, useEffect} from 'react';
import axios from "axios";
import CharacterCard from "./components/CharacterCard.js";
// import './App.css';
import './App.scss';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [personObjs, setPersonObjs] = useState([])
  const [page, setPage] = useState("https://henry-mock-swapi.herokuapp.com/api/?page=1");
  const [nextPage, setPageNext] = useState(null)
  const [previousPage, setPagePrevious] = useState(null)
  
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //useEffect runs whenever it sees second argument changes
  useEffect( () => {
    axios.get(page)
    .then(res => {
      // const nextPage = res.data.next; // https://henry-mock-swapi.herokuapp.com/api/?page=2
      // const previousPage = res.data.previous; // null
      setPageNext(res.data.next)
      setPagePrevious(res.data.previous)
      const data = res.data.results;
      // access data outside of .then - updating state of app to include data response. set next render
      setPersonObjs(data);
    })
    .catch(error => console.log("API error:", error))
  },[page])

  const visitNextPage = () => {
    setPage(nextPage)
  }
  
  const visitPreviousPage = () => {
    setPage(previousPage)
  }
  
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
      {previousPage && <button onClick={visitPreviousPage}>Previous 10</button>}
      {nextPage && <button onClick={visitNextPage}>Next 10</button>}
    </div>
  );
}

export default App;
