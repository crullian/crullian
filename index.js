import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'  
import { render } from 'react-dom'
import Root from './components/Root'
import Home from './components/Home'
import ArtList from './components/ArtList'
import ArtItem from './components/ArtItem'
import MusicList from './components/MusicList'
import Portfolio from './components/Portfolio'
import Client from './components/Client'
import Personal from './components/Personal'
import Cv from './components/CV'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home}/>
      <Route path="art">
        <IndexRoute component={ArtList}/>
        <Route path="/art/:artist" component={ArtItem}/>
      </Route>
      <Route path="music" component={MusicList}/>
      <Route path="portfolio">
        <IndexRoute component={Portfolio}/>
        <Route path="client" component={Client}/>
        <Route path="personal" component={Personal}/>
      </Route>
      <Route path="cv" component={Cv}/>
    </Route>
  </Router>
), document.getElementById('app'))