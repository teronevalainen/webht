import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from './components/Logout';
import Header from './components/Header';
import Snippet from "./components/AllSnippets";
import Home from "./components/Home";
import NewSnippet from "./components/NewSnippet";
import SnippetSearch from "./components/SnippetSearch";
import Temp from "./components/Temp"

function App() {
  const [user, setUser] = useState({});

  const [jwt, setJwt] = useState("");
  const [snippets, setSnippets] = useState(null);

  //const [comments, setComments] = useState(null)
  //const { id } = useParams();

  //Fetching all snippets, and sending them to some routes
  useEffect(() => {
    fetch("/api/snippets")
      .then(response => response.json())
      .then(json => setSnippets(json))
  }, [])
  //Basic Router stuff
  return (
    <Router>
      <div className="App">

        <h1>Codesnippet app</h1>
        <Header></Header>
        <h2 className='header'> {jwt ? `Logged in as ${user.username}!` : ""} </h2>

        <Routes>
          <Route path="/" element={<Home snippets={snippets}></Home>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login setJwt={setJwt} setUser={setUser} jwt={jwt}></Login>}></Route>
          <Route path="/logout" element={<Logout jwt={jwt}></Logout>}></Route>
          <Route path="/snippets" element={<Snippet jwt={jwt} snippets={snippets}></Snippet>}></Route>
          <Route path="/newSnippet" element={<NewSnippet jwt={jwt}></NewSnippet>}></Route>
          <Route path="/snippet/:id" element={<SnippetSearch snippets={snippets} jwt={jwt} ></SnippetSearch>}></Route>
          <Route path="*" element={<Temp></Temp>}></Route>
        </Routes>



      </div>
    </Router>
  );
}

export default App;
