import './App.css';
import Header from './components/Header/Header';
import News from './components/HackerNews/News';
import bootstrap from 'bootstrap';
import { useEffect, useState } from 'react';


function App() {
  const url = 'https://hacker-news.firebaseio.com/v0/topstories.json'
  const [user, setUser] = useState([]);

  useEffect(()=>{
    fetch(url)
    .then(respons =>{
      return respons.json();
    })
    .then(json => {
      json.length = 10;
      setUser(json);
    });
  },[])


  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Header/>
          {
            user.map((item, index)=>{
              return <News key={index} content = {item} id = {index}/>
            })
          }
        </div>
      </div>
    </div>


  );
}

export default App;
