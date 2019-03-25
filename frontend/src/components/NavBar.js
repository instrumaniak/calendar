import React, { useState } from 'react'
import { Link, NavLink as RRNavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const NavBar = () => {
  const [ isOpen, setIsOpen ] = useState(false) // state for toggling navbar

  const toggle = () => setIsOpen(!isOpen)
  const closeNav = () => setIsOpen(false)

  return (
    <Navbar fixed='top' color='white' light expand='md' className='shadow-sm'>
      <NavbarBrand tag={Link} to='/' onClick={closeNav}>Calendar</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to='/about' onClick={closeNav}>About</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default NavBar
