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
  CardMedia,
  CardWrapper,
  CardTitle,
  CardText
} from '@materialios/components'

import {
  MenuIcon,
  ArrowBackIcon
} from '@materialios/icons'

import materialiosImg from './woman-pants.jpg'

import './Pants.css'

const Pants = () => {
  const { orientation, device } = useContext(ResponsiveContext)
  const { setDrawer } = useContext(DrawerContext)

  const [isDesktopLandscape, setIsDesktopLandscape] = useState(false)

  useEffect(() => {
    setIsDesktopLandscape(orientation === 'Landscape' && device === 'Desktop')
  }, [orientation, device])

  return (
    <div className='WomanPants'>
      <AppBar>
        {!isDesktopLandscape
          ? <AppBarLeftIcon icon={MenuIcon} onClick={() => setDrawer({ show: true })} />
          : <AppBarLeftIcon icon={ArrowBackIcon} onClick={() => {}} />}
        <AppBarTitle title='Pants' />
      </AppBar>
      <Container>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((row, index) => (
            <Col key={index} ph={6} pt={4} pd={4} lh={4} lt={3} ld={3}>
              <Card>
                <CardMedia img={materialiosImg} />
                <CardWrapper>
                  <CardTitle>
                    Product #{row}
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi...
                  </CardText>
                </CardWrapper>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Pants
