import React from 'react'
import { Router, Route, browserHistory } from 'react-router'  
import { render } from 'react-dom'
import Home from './components/Home'
import About from './components/About'
import Other from './components/Other'
import ArtList from './components/ArtList'
import MusicList from './components/MusicList'
import Portfolio from './components/Portfolio'
import Client from './components/Client'
import Personal from './components/Personal'
import Cv from './components/CV'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path="/about" component={About}/>
      <Route path="/other" component={Other}/>
        <Route path="/other/art" component={ArtList}/>
        <Route path="/other/music" component={MusicList}/>
      <Route path="/portfolio" component={Portfolio}/>
        <Route path="/portfolio/client" component={Client}/>
        <Route path="/portfolio/personal" component={Personal}/>
      <Route path="/cv" component={Cv}/>
    </Route>
  </Router>
), document.getElementById('app'))