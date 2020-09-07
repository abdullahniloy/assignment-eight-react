import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';
import Comments from './components/Comments/Comments';






function App() {

  return (
    <Router>
      <Switch>  
        <Route path="/home"> 
        <Home></Home>
        </Route>

       <Route path="/post/:postId">  
          <PostDetail/>
       </Route>
        {/* <Route path="/comment">
           <Comments></Comments>
        </Route> */}
      
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
            <NoMatch/>
          </Route>
      </Switch>
     
    </Router>
  );
}

export default App;
