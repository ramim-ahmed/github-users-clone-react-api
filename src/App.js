import { useEffect, useState } from 'react';
import './App.css';
import GithubUsers from './components/GithubUsers';


function App() {
  const [users, setUsers] = useState([]);
  useEffect( () => {
     fetch('https://api.github.com/users')
     .then( res => res.json())
     .then( data => setUsers(data))
  }, [] )

  return (
    <div className="App">
      <h1> Api Simple Github Users React Clone </h1>
      <div className="content">
         {
           users.map( user => <GithubUsers user = {user} />)
         }
      </div>
    </div>
  );
}

export default App;
