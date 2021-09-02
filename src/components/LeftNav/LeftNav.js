import {
  Drawer,
  DrawerNav,
  DrawerNavExpandable
} from '@materialios/components'

const LeftNav = () => {
  return (
    <Drawer>
      <DrawerNav name='Home' href='/' />
      <DrawerNavExpandable name='Man'>
        <DrawerNav name='T-Shirt' href='/man/t-shirt' />
        <DrawerNav name='Pants' href='/man/pants' />
      </DrawerNavExpandable>
      <DrawerNavExpandable name='Woman'>
        <DrawerNav name='T-Shirt' href='/woman/t-shirt' />
        <DrawerNav name='Pants' href='/woman/pants' />
      </DrawerNavExpandable>
    </Drawer>
  )
}

export default LeftNav
