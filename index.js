import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'  
import { render } from 'react-dom'
import Root from './components/Root'
import Home from './components/Home'
import ArtList from './components/ArtList'
import ArtItem from './components/ArtItem'
import MusicList from './components/MusicList'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home}/>
      <Route path="work">
        <IndexRoute component={ArtList}/>
        <Route path="/work/:work" component={ArtItem}/>
      </Route>
      <Route path="music" component={MusicList}/>
    </Route>
  </Router>
), document.getElementById('app'))