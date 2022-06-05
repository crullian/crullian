import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'  
import { render } from 'react-dom'
import Root from './components/Root'
import Home from './components/Home'
import ArtList from './components/ArtList'
import Image from './components/Image'
import MusicList from './components/MusicList'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home}/>
      <Route path="work">
        <IndexRoute component={ArtList}/>
        <Route path="/work/:work" component={props => <Image src={props.location.state.artwork.img} />}/>
      </Route>
      <Route path="music" component={MusicList}/>
    </Route>
  </Router>
), document.getElementById('app'))