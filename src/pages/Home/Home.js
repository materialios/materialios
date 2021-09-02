import { useState, useContext, useEffect } from 'react'

import {
  ResponsiveContext,
  DrawerContext
} from '@materialios/contexts'

import {
  AppBar,
  AppBarLeftIcon,
  AppBarTitle,
  Container,
  Row,
  Col,
  Card,
  CardMedia
} from '@materialios/components'

import {
  MenuIcon,
  ArrowBackIcon
} from '@materialios/icons'

import dummyPromo from './promo.jpg'

import './Home.css'

const Home = () => {
  const { orientation, device } = useContext(ResponsiveContext)
  const { setDrawer } = useContext(DrawerContext)

  const [isDesktopLandscape, setIsDesktopLandscape] = useState(false)

  useEffect(() => {
    setIsDesktopLandscape(orientation === 'Landscape' && device === 'Desktop')
  }, [orientation, device])

  return (
    <div className='Home'>
      <AppBar>
        {!isDesktopLandscape
          ? <AppBarLeftIcon icon={MenuIcon} onClick={() => setDrawer({ show: true })} />
          : <AppBarLeftIcon icon={ArrowBackIcon} onClick={() => {}} />}
        <AppBarTitle title='Home' />
      </AppBar>
      <Container>
        <Row>
          <Col ph={12} pt={12} pd={12} lh={12} lt={12} ld={12}>
            <Card>
              <CardMedia img={dummyPromo} style={{ paddingTop: '25%' }} />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
