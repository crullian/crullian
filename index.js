import React from 'react'
import { Router, Route, browserHistory } from 'react-router'  
import { render } from 'react-dom'
import Home from './components/Home'
import About from './components/About'
import ArtList from './components/ArtList'
import Music from './components/Music'
import WebList from './components/WebList'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path="/about" component={About}/>
      <Route path="/art" component={ArtList}/>
      <Route path="/music" component={Music}/>
      <Route path="/web" component={WebList}/>
    </Route>
  </Router>
), document.getElementById('app'))