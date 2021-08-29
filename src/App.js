import { useState, useContext, useEffect } from 'react'

import {
  ResponsiveContext,
  DrawerContext
} from '@materialios/contexts'

import { MenuIcon } from '@materialios/icons'

import {
  MainScreen,
  AppBar,
  AppBarLeftIcon,
  AppBarTitle,
  Drawer,
  DrawerNav,
  DrawerNavExpandable
} from '@materialios/components'

import './App.css'

const App = () => {
  const { orientation, device } = useContext(ResponsiveContext)
  const [drawer, setDrawer] = useContext(DrawerContext)

  const [title, setTitle] = useState('Home')
  const [isDesktopLandscape, setIsDesktopLandscape] = useState(false)

  useEffect(() => {
    setIsDesktopLandscape(orientation === 'Landscape' && device === 'Desktop')
  }, [orientation, device])

  useEffect(() => {
    // console.log('drawer', drawer)
  }, [drawer])

  const handleNav = ({ name = '' }) => {
    setTitle(name)
    setDrawer({ show: false })
  }

  return (
    <div className='App'>
      <Drawer>
        <DrawerNav name='Home' href='/' onClick={handleNav} />
        <DrawerNavExpandable name='Products'>
          <DrawerNav name='Alfa' href='/products/alfa' onClick={handleNav} />
          <DrawerNav name='Bravo' href='/products/bravo' onClick={handleNav} />
        </DrawerNavExpandable>
        <DrawerNavExpandable name='Services'>
          <DrawerNav name='One' href='/services/one' onClick={handleNav} />
          <DrawerNav name='Two' href='/services/two' onClick={handleNav} />
          <DrawerNav name='Three' href='/services/three' onClick={handleNav} />
        </DrawerNavExpandable>
      </Drawer>
      <MainScreen>
        <AppBar>
          {!isDesktopLandscape && <AppBarLeftIcon icon={MenuIcon} onClick={() => setDrawer({ show: true })} />}
          <AppBarTitle title={title} />
        </AppBar>
      </MainScreen>
    </div>
  )
}

export default App
