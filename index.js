import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'  
import { render } from 'react-dom'
import Root from './components/Root'
import Home from './components/Home'
import Other from './components/Other'
import ArtList from './components/ArtList'
import MusicList from './components/MusicList'
import Portfolio from './components/Portfolio'
import Client from './components/Client'
import Personal from './components/Personal'
import Cv from './components/CV'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home}/>
      <Route path="other">
        <IndexRoute component={Other}/>
        <Route path="art" component={ArtList}/>
        <Route path="music" component={MusicList}/>
      </Route>
      <Route path="portfolio">
        <IndexRoute component={Portfolio}/>
        <Route path="client" component={Client}/>
        <Route path="personal" component={Personal}/>
      </Route>
      <Route path="cv" component={Cv}/>
    </Route>
  </Router>
), document.getElementById('app'))