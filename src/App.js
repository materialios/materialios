import { Route } from 'react-router'

import { MainScreen } from '@materialios/components'

import { LeftNav } from './components'

import {
  Home,
  ManTShirt,
  ManPants,
  WomanTShirt,
  WomanPants
} from './pages'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <LeftNav />
      <MainScreen>
        {/* */}
        <Route exact path='/' component={Home} />
        {/* */}
        <Route exact path='/man/t-shirt' component={ManTShirt} />
        <Route exact path='/man/pants' component={ManPants} />
        {/* */}
        <Route exact path='/woman/t-shirt' component={WomanTShirt} />
        <Route exact path='/woman/pants' component={WomanPants} />
        {/* */}
      </MainScreen>
    </div>
  )
}

export default App
