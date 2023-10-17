import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'  
import { render } from 'react-dom'
import Root from './components/Root'
import Home from './components/Home'
import ArtList from './components/ArtList'
import Image from './components/Image'
import MusicList from './components/MusicList'
import Bio from './components/Bio'
import Detail from './components/Detail';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={ArtList}/>
      <Route path="work">
        <IndexRoute component={ArtList}/>
        <Route path="/work/:work" component={props => <Detail {...props} />}/>
      </Route>
      <Route path="music" component={MusicList}/>
      <Route path="bio" component={Bio}/>
    </Route>
  </Router>
), document.getElementById('app'))