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
        <Route exact path='/' element={<Home />} />
        {/* */}
        <Route exact path='/man/t-shirt' element={<ManTShirt />} />
        <Route exact path='/man/pants' element={<ManPants />} />
        {/* */}
        <Route exact path='/woman/t-shirt' element={<WomanTShirt />} />
        <Route exact path='/woman/pants' element={<WomanPants />} />
        {/* */}
      </MainScreen>
    </div>
  )
}

export default App
