import {
  Drawer,
  DrawerNav,
  DrawerNavExpandable
} from '@materialios/components'

import packageJson from '../../../package.json'

const LeftNav = () => {
  return (
    <Drawer brand='Fashion Shop' footer={packageJson ? `Version ${packageJson.version}` : ''}>
      <DrawerNav name='Home' href='/' isDefault />
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
