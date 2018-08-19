import React from 'react'

import Tab from './Tab'

const DesktopNav = () => (
  <div
    style={{
      display: 'flex',
      marginRight: 24,
    }}
  >
    <Tab to="/about">About</Tab>
    <Tab to="/events">Events</Tab>
    <Tab to="/menu">Menu</Tab>
  </div>
)

export default DesktopNav
